import RightSideBar from '@/components/RightSideBar';
import Suggestions from '@/components/Suggestions';
import TweetInput from '@/components/TweetInput';
import supabase from '@/utils/supabase';

export default async function Home() {
  const { data, error } = await supabase.from('My tweets').select();

  return (
    <main className='flex'>
      <div className='sm:min-w-[530px] md:min-w-[670px] min-h-screen sm:border-x border-x-slate-200'>
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
