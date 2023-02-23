/** @jsxImportSource @emotion/react */
'use client';

import Link from 'next/link';
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  EnvelopeIcon,
  BookmarkIcon,
  ClipboardDocumentListIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { Session } from 'next-auth';

export default function SideBarLink({ session }: { session: Session | null }) {
  const breakpoints = [640, 768, 1024, 1280];
  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
  const email = session?.user?.email;
  const idx = email?.indexOf('@');
  const emailId = email?.slice(0, idx);

  return (
    <section
      css={{
        marginBottom: 75,
        flexGrow: 1,
        [mq[0]]: {
          paddingRight: 10,
        },
      }}
    >
      <Link href='/'>
        <svg
          viewBox='0 0 24 24'
          aria-hidden='true'
          css={{
            width: 45,
            height: 45,
            color: 'rgb(29, 155, 240)',
            borderRadius: '50%',
            padding: 10,
            '&:hover': {
              backgroundColor: 'rgba(29, 155, 240, 0.1)',
            },
            transition: 'background-color 300ms',
            marginRight: 'auto',
            marginLeft: 'auto',
            [mq[0]]: {
              margin: 0,
              width: 55,
              height: 55,
            },
          }}
          fill='currentcolor'
        >
          <g>
            <path d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'></path>
          </g>
        </svg>
      </Link>

      <Link href='/' className='sidebar-link'>
        <HomeIcon className='sidebar-icon' />
        <span className='sidebar-text'>Home</span>
      </Link>

      <Link href='/explore' className='sidebar-link'>
        <HashtagIcon className='sidebar-icon' />
        <span className='sidebar-text'>Explore</span>
      </Link>

      <Link href='/notifications' className='sidebar-link'>
        <BellIcon className='sidebar-icon' />
        <span className='sidebar-text'>Notifications</span>
      </Link>

      <Link href='/messages' className='sidebar-link'>
        <EnvelopeIcon className='sidebar-icon' />
        <span className='sidebar-text'>Messages</span>
      </Link>

      <Link href='/bookmarks' className='sidebar-link'>
        <BookmarkIcon className='sidebar-icon' />
        <span className='sidebar-text'>Bookmarks</span>
      </Link>

      <Link href={`/${emailId}/lists`} className='sidebar-link'>
        <ClipboardDocumentListIcon className='sidebar-icon' />
        <span className='sidebar-text'>Lists</span>
      </Link>

      <Link href={`/${emailId}`} className='sidebar-link'>
        <UserIcon className='sidebar-icon' />
        <span className='sidebar-text'>Profile</span>
      </Link>

      <button
        css={{
          backgroundColor: 'rgb(29, 155, 240)',
          borderRadius: '50%',
          padding: 8,
          marginRight: 'auto',
          marginLeft: 'auto',
          display: 'block',
          [mq[0]]: {
            padding: 12,
          },
          [mq[3]]: {
            display: 'none',
          },
        }}
      >
        <svg
          viewBox='0 0 24 24'
          aria-hidden='true'
          css={{
            color: 'white',
            width: 15,
            height: 15,
            [mq[0]]: {
              width: 30,
              height: 30,
            },
          }}
          fill='currentcolor'
        >
          <g>
            <path d='M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z'></path>
          </g>
        </svg>
      </button>

      <button
        className='bg-twitter text-xl'
        css={{
          color: 'white',
          borderRadius: '9999px',
          padding: '10px 0',
          display: 'none',
          width: '90%',
          fontWeight: 'bold',
          [mq[3]]: {
            display: 'inline-block',
          },
        }}
      >
        Tweet
      </button>
    </section>
  );
}
