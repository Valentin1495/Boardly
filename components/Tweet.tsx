/** @jsxImportSource @emotion/react */
'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Tweet() {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const idx = email?.indexOf('@');
  const emailId = email?.slice(0, idx);
  const profilePic = session?.user?.image as string;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [tweet, setTweet] = useState<string | undefined>();
  const handleChange = () => setTweet(textareaRef.current?.value);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [textareaRef, tweet]);

  return (
    <div css={{ display: 'flex', padding: 12 }}>
      <Link
        href={`/${emailId}`}
        css={{ marginRight: 12, minWidth: 'fit-content' }}
      >
        <img
          src={profilePic}
          alt='Profile picture'
          className='w-10 h-10 sm:w-16 sm:h-16'
          css={{
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      </Link>
      <textarea
        ref={textareaRef}
        placeholder="What's happening?"
        css={{
          width: '100%',
          minHeight: 60,
          marginRight: 12,
          outline: 'none',
        }}
        className='sm:text-xl max-h-32 sm:max-h-72'
        value={tweet}
        onChange={handleChange}
      />
    </div>
  );
}
