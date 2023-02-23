/** @jsxImportSource @emotion/react */
'use client';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';

interface Profile {
  session: Session | null;
  username: string;
  emailId: string;
  profilePic: string;
}

export default function SideBarProfile({
  session,
  username,
  emailId,
  profilePic,
}: Profile) {
  const breakpoints = [640, 768, 1024, 1280];
  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
  if (!session) return <></>;

  return (
    <section
      css={{
        display: 'block',
        [mq[3]]: {
          display: 'flex',
          alignItems: 'start',
          flexDirection: 'column-reverse',
        },
      }}
    >
      <button
        className='profile-btn'
        css={{
          [mq[0]]: {
            marginRight: 12,
          },
          [mq[3]]: {
            display: 'flex',
            marginRight: 0,
            padding: '5px 10px',
            alignItems: 'center',
            transition: 'background-color 300ms',
            borderRadius: 9999,
            width: '100%',
            '&:hover': {
              backgroundColor: 'rgb(229 231 235)',
            },
          },
        }}
      >
        <img
          src={profilePic as string}
          alt='Profile picture'
          css={{
            width: 35,
            height: 35,
            objectFit: 'cover',
            borderRadius: '50%',
            [mq[0]]: {
              width: 54,
              height: 54,
            },
            [mq[3]]: {
              marginRight: 15,
            },
          }}
        />
        <section
          css={{
            display: 'none',
            [mq[3]]: {
              display: 'block',
              flexGrow: 1,
            },
          }}
        >
          <article
            className='truncate max-w-[140px]'
            css={{
              fontWeight: 'bold',
              textAlign: 'left',
            }}
          >
            {username}
          </article>
          <article
            className='truncate max-w-[140px]'
            css={{ color: 'rgb(107 114 128)', textAlign: 'left' }}
          >
            @{emailId}
          </article>
        </section>
        <EllipsisHorizontalIcon
          className='xl:text-gray-500'
          css={{
            display: 'none',
            [mq[3]]: {
              flexShrink: 0,
              width: 30,
              height: 30,
              display: 'block',
            },
          }}
        />
      </button>
      <button
        onClick={() => {
          signOut();
        }}
        className='logout-btn'
        css={{
          padding: '10px 0',
          borderRadius: 6,
          width: '100%',
          transition: 'opacity 200ms',
          boxShadow: '0 0 5px 2.5px rgba(0, 0, 0, 0.1)',
          marginBottom: 10,
          '&:hover': {
            backgroundColor: 'rgb(229, 231, 235)',
          },
          display: 'none',
          [mq[3]]: {
            display: 'inline-block',
          },
        }}
      >
        Log out @{emailId}
      </button>
    </section>
  );
}
