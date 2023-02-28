/**@jsxImportSource @emotion/react */
'use client';

import Link from 'next/link';
import { User } from './Suggestions';

export default function Suggestion({
  firstName,
  lastName,
  bio,
  avatar,
  emailId,
}: User) {
  const follow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };
  return (
    <Link
      href={`/${emailId}`}
      css={{ display: 'flex', padding: 10 }}
      className='space-x-3 hover:bg-gray-100'
    >
      <img
        src={avatar}
        alt='Profile picture'
        css={{
          objectFit: 'cover',
          borderRadius: '50%',
          minWidth: 'fit-content',
        }}
        className='w-10 h-10 sm:w-16 sm:h-16'
      />

      <div className='space-y-1.5 text-sm sm:text-base' css={{ flexGrow: 1 }}>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div css={{ display: 'flex', flexDirection: 'column' }}>
            <span
              css={{ fontWeight: 'bold' }}
              className='truncate w-[140px] sm:w-[370px]'
            >
              {firstName} {lastName}
            </span>
            <span className='text-gray-500 truncate w-[140px] sm:w-[370px]'>
              @{emailId}
            </span>
          </div>
          <button
            onClick={follow}
            className='text-xs sm:text-sm'
            css={{
              color: 'white',
              backgroundColor: 'black',
              borderRadius: 9999,
              padding: '5px 10px',
              fontWeight: 'bold',
            }}
          >
            Follow
          </button>
        </div>
        <p>{bio}</p>
      </div>
    </Link>
  );
}
