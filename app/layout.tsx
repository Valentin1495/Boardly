import './globals.css';
import RootStyleRegistry from './emotion';
import SessionProvider from '@/components/SessionProvider';

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <RootStyleRegistry>
          <SessionProvider>{children}</SessionProvider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
