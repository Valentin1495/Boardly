'use server';

import db from '@/lib/db';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('12h')
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function login() {
  const user = { id: uuidv4() };

  // Create the session
  const expires = new Date(Date.now() + 12 * 60 * 60 * 1000);
  const session = await encrypt({ user, expires });

  // Save the session in a cookie
  cookies().set('session', session, { expires, httpOnly: true });
}

export async function getSession() {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return await decrypt(session);
  // {
  //   user: { id: '546e2f3b-421a-44af-ab92-621569e14967' },
  //   expires: '2024-09-21T19:19:20.994Z',
  //   iat: 1726903160,
  //   exp: 1726946360
  // }
}

export async function fetchCurrentUser() {
  const session = await getSession();

  const currentUser = await db.user.findFirst({
    where: {
      userId: session.user.id,
    },
  });

  return currentUser;
}

export async function findUser(userId: string) {
  const user = await db.user.findFirst({
    where: {
      userId,
    },
  });

  return user;
}

export async function createUser(userId: string) {
  const existingUser = await findUser(userId);

  if (existingUser) return;

  await db.user.create({
    data: {
      userId,
    },
  });
}
