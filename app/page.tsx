import Loader from '@/components/Loader';
import RightSideBar from '@/components/RightSideBar';
import TweetInput from '@/components/TweetInput';
import Tweets, { Post } from '@/components/Tweets';
import supabase from '@/utils/supabase';

export const revalidate = 0;

export default async function Home() {
  const { data, error } = await supabase
    .from('Tweets')
    .select()
    .order('created_at', { ascending: false });

  return (
    <main className='lg:flex'>
      <div className='w-full lg:w-3/5 min-h-screen sm:border-x border-x-slate-200'>
        <div className='sticky top-0 bg-white z-10'>
          <h1 className='p-2 text-base sm:text-xl font-black sm:p-3'>Home</h1>
          <TweetInput />
        </div>

        <p>{error?.message}</p>
        {data && <Tweets tweets={data as Post[]} />}
      </div>
      <RightSideBar />
    </main>
  );
}
