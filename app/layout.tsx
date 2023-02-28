import './globals.css';
import RootStyleRegistry from './emotion';
import SessionProvider from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import SideBar from '@/components/SideBar';
import Login from '@/components/Login';

export default async function RootLayout({
  children,
}: {
  children: JSX.Element;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <RootStyleRegistry>
          <SessionProvider>
            {session ? (
              <div className='flex lg:max-w-5xl xl:max-w-7xl mx-auto'>
                <SideBar />
                <div className='sm:ml-[95px] xl:ml-[280px]'>{children}</div>
              </div>
            ) : (
              <Login />
            )}
          </SessionProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
