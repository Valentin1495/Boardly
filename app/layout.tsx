import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mannage Your Projects From Anywhere | Boardly',
  description: 'Boardly is a project management tool',
  icons: [
    {
      url: '/logo.svg',
      href: '/logo.svg',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
