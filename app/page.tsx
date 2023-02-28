import RightSideBar from '@/components/RightSideBar';
import Suggestions from '@/components/Suggestions';
import TweetInput from '@/components/TweetInput';
import supabase from '@/utils/supabase';

export default async function Home() {
  const { data, error } = await supabase.from('My tweets').select();

  return (
    <main className='flex'>
      <div className='w-full md:w-[600px] lg:w-2/3 min-h-screen sm:border-x sm:border-x-slate-200'>
        <div className='sticky top-0 bg-white'>
          <h1 className='p-2 text-base sm:text-xl font-black sm:p-3'>Home</h1>
          <TweetInput />
        </div>
        <Suggestions />
      </div>
      <RightSideBar />
    </main>
  );
}
