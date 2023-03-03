/** @jsxImportSource @emotion/react */
'use client';

import supabase from '@/utils/supabase';
import { PhotoIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

interface Previews {
  id: string;
  src: string;
}

export default function TweetInput() {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const idx = email?.indexOf('@');
  const emailId = email?.slice(0, idx);
  const profilePic = session?.user?.image as string;
  const username = session?.user?.name;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [tweet, setTweet] = useState<string>('');
  const [previews, setPreviews] = useState<Previews[]>([]);
  const [imageFiles, setImageFiles] = useState<FileList>();
  const [imgPaths, setImgPaths] = useState<string[]>([]);

  const handleChange = () => setTweet(textareaRef.current?.value!);

  const selectImg = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files?.length) {
      setImageFiles(files);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [textareaRef]);

  useEffect(() => {
    if (imageFiles) {
      for (const imageFile of imageFiles) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(imageFile);
        fileReader.onloadend = () => {
          setPreviews((prev) => [
            ...prev,
            { id: uuidv4(), src: fileReader.result as string },
          ]);
        };
      }
    }
  }, [imageFiles]);

  const upload = async () => {
    for (const imageFile of imageFiles!) {
      const { data, error } = await supabase.storage
        .from('photos')
        .upload(uuidv4() + imageFile.name, imageFile);

      if (error) {
        toast.error(error.message);
      } else {
        setImgPaths((prev) => [
          ...prev,
          process.env.NEXT_PUBLIC_SUPABASE_URL +
            '/storage/v1/object/public/photos/' +
            data.path,
        ]);
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (previews.length) {
      upload();
    }

    const { error } = await supabase.from('Tweets').insert({
      tweet,
      username,
      email_id: emailId,
      avatar: profilePic,
      photos: imgPaths,
    });

    if (error) {
      toast.error(error.message);
    } else {
      setTweet('');
      setImgPaths([]);
      setPreviews([]);
      setImageFiles(undefined);
      toast.success('Your tweet was sent');
    }
  };

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
      <form css={{ width: '85%' }} onSubmit={handleSubmit}>
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
        {previews.length
          ? previews.map((preview) => (
              <img
                key={preview.id}
                onClick={() => {
                  setPreviews(previews.filter((img) => img.id !== preview.id));
                }}
                src={preview.src}
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
            ))
          : null}
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
            multiple
          />
          <button
            type='submit'
            disabled={!tweet && !previews.length}
            className='disabled:opacity-50 disabled:cursor-not-allowed bg-twitter text-white font-bold text-sm sm:text-base rounded-full px-4 py-1 sm:px-5 sm:py-1.5'
          >
            Tweet
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
