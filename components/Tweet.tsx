/** @jsxImportSource @emotion/react */
'use client';

import { Post } from './Tweets';

export default function Tweet({
  created_at,
  tweet,
  id,
  username,
  email_id,
  avatar,
  photos,
}: Post) {
  return (
    <div css={{ display: 'flex' }} className='space-x-2'>
      <img
        src={avatar}
        alt='avatar'
        className='w-10 h-10 sm:w-14 sm:h-14'
        css={{ borderRadius: '50%', objectFit: 'cover' }}
      />
      <div className='space-y-1'>
        <div>
          <span css={{ fontWeight: 'bold', marginRight: 8 }}>{username}</span>
          <span className='text-sm text-gray-500'>@{email_id}</span>
          <span css={{ margin: '0 4px' }}>·</span>
          <span className='text-sm text-gray-500'>{created_at}</span>
        </div>
        <p>{tweet}</p>
        <div className='pt-3 grid grid-cols-2 gap-2'>
          {photos.length
            ? photos.map((photo, idx) => (
                <img
                  key={idx}
                  src={photo}
                  css={{
                    width: '100%',
                    aspectRatio: '16 / 9',
                    borderRadius: 8,
                  }}
                  alt='Tweet'
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
