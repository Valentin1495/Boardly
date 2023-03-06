'use client';

import supabase from '@/utils/supabase';
import { useEffect, useState } from 'react';
import Tweet from './Tweet';

export interface Post {
  created_at: string;
  tweet: string;
  id: number;
  username: string;
  email_id: string;
  avatar: string;
  photos: string[];
}

export default function Tweets({ tweets }: { tweets: Post[] }) {
  const [posts, setPosts] = useState(tweets);

  useEffect(() => {
    const channel = supabase
      .channel('realtime tweets')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'Tweets',
        },
        (payload) => setPosts([payload.new as Post, ...posts])
      )
      .subscribe();

    () => supabase.removeChannel(channel);
  }, [setPosts, posts]);

  return (
    <div className='p-3 space-y-5'>
      {posts.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </div>
  );
}
