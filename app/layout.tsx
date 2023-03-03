import './globals.css';
import RootStyleRegistry from './emotion';
import SessionProvider from '@/components/SessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import SideBar from '@/components/SideBar';
import Login from '@/components/Login';
import QueryProvider from '@/components/QueryProvider';

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
          <QueryProvider>
            <SessionProvider>
              <>
                {session ? (
                  <div className='sm:grid grid-cols-9 max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto xl:px-5'>
                    <SideBar />
                    <div className='col-span-8 xl:col-span-7'>{children}</div>
                  </div>
                ) : (
                  <Login />
                )}
              </>
            </SessionProvider>
          </QueryProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
