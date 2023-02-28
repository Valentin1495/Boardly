/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

export default function SideBarProfile() {
  const { data: session } = useSession();
  const username = session?.user?.name;
  const profilePic = session?.user?.image;
  const email = session?.user?.email;
  const idx = email?.indexOf('@');
  const emailId = email?.slice(0, idx);
  const breakpoints = [640, 768, 1024, 1280];
  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
  const [showBtn, setShowBtn] = useState(false);
  const btnStyles = css`
    opacity: ${showBtn ? 1 : 0};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
    text-align: left;
    pointer-events: ${showBtn ? 'all' : 'none'};
    transition: all 300ms;
    padding: 10px;
    border-radius: 6px;
    width: 100%;
    transition: opacity 200ms;
    box-shadow: 0 0 5px 2.5px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    background-color: white;
  `;

  if (!session)
    return (
      <>
        <div className='rounded-full mx-auto block xl:hidden animate-pulse bg-slate-200 w-9 h-9 sm:w-14 sm:h-14'></div>
        <div className='mt-[140px] rounded-full w-[280px] h-12 bg-slate-200 animate-pulse hidden xl:block'></div>
      </>
    );

  return (
    <section
      className='max-w-full'
      css={{
        display: 'block',
        position: 'relative',
        [mq[3]]: {
          display: 'flex',
          alignItems: 'start',
          flexDirection: 'column-reverse',
          position: 'unset',
        },
      }}
    >
      <button
        className='profile-btn'
        css={{
          [mq[0]]: {
            // marginRight: 12,
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
          onClick={() => setShowBtn((prev) => !prev)}
          src={profilePic as string}
          alt='Profile picture'
          css={{
            width: 36,
            height: 36,
            objectFit: 'cover',
            borderRadius: '50%',
            [mq[0]]: {
              width: 56,
              height: 56,
            },
            [mq[3]]: {
              marginRight: 15,
              pointerEvents: 'none',
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

      <button
        onClick={() => signOut()}
        className='hover:text-gray-500 xl:hidden left-12 sm:left-20 text-sm sm:text-base inline-block min-w-fit'
        css={btnStyles}
      >
        Log out @{emailId}
      </button>
    </section>
  );
}
