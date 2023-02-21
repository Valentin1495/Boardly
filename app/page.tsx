import Login from '@/components/Login';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) return <Login />;
  return <main>Logged In!</main>;
}
