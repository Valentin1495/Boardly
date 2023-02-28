/** @jsxImportSource @emotion/react */
'use client';

import { PhotoIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

export default function TweetInput() {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const idx = email?.indexOf('@');
  const emailId = email?.slice(0, idx);
  const profilePic = session?.user?.image as string;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [tweet, setTweet] = useState<string>();
  const [preview, setPreview] = useState<string>();
  const [img, setImg] = useState<File>();

  const handleChange = () => setTweet(textareaRef.current?.value);
  const selectImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.substring(0, 5) === 'image') {
      setImg(file);
    } else setImg(undefined);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [textareaRef, tweet]);

  useEffect(() => {
    if (img) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(img);
      fileReader.onloadend = () => setPreview(fileReader.result as string);
    } else {
      setPreview(undefined);
    }
  }, [img]);

  return (
    <div
      css={{ display: 'flex', padding: 12 }}
      className='border-y border-y-slate-200 space-x-3'
    >
      {profilePic ? (
        <Link href={`/${emailId}`} css={{ minWidth: 'fit-content' }}>
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
      ) : (
        <div className='animate-pulse bg-slate-200 w-10 h-10 sm:w-16 sm:h-16 rounded-full'></div>
      )}
      <div css={{ width: '90%' }}>
        <textarea
          ref={textareaRef}
          placeholder="What's happening?"
          css={{
            width: '100%',
            minHeight: 65,
            marginRight: 12,
            marginBottom: 12,
            paddingBottom: 6,
            outline: 'none',
          }}
          className='sm:text-xl border-b border-slate-200 max-h-32 sm:max-h-72'
          value={tweet}
          onChange={handleChange}
        />
        {preview && (
          <img
            onClick={() => setPreview(undefined)}
            src={preview}
            alt='Preview'
            css={{
              objectFit: 'cover',
              width: '100%',
              maxheight: '100%',
              borderRadius: 15,
              marginBottom: 8,
              cursor: 'pointer',
              '&:hover': {
                opacity: '90%',
              },
            }}
          />
        )}
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <PhotoIcon
            onClick={() => fileRef.current?.click()}
            className='text-twitter'
            css={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              padding: 8,
              transition: 'background-color 300ms',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(29, 155, 240, 0.1)',
              },
            }}
          />

          <input
            type='file'
            accept='image/*'
            css={{ display: 'none' }}
            ref={fileRef}
            onChange={selectImg}
          />
          <button
            disabled={!tweet?.trim() && !preview}
            className='disabled:opacity-50 disabled:cursor-not-allowed bg-twitter text-white font-bold text-sm sm:text-base rounded-full px-4 py-1 sm:px-5 sm:py-1.5'
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
