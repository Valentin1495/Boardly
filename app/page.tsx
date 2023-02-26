import RightSideBar from '@/components/RightSideBar';
import TweetInput from '@/components/Tweet';
import Tweets from '@/components/Tweets';

export default function Home() {
  return (
    <main className='xl:flex'>
      <div className='xl:w-2/3'>
        <div className='sticky top-0 p-1.5 sm:p-3 border-b border-b-slate-200 text-lg sm:text-xl font-black'>
          Home
        </div>
        <TweetInput />
        <Tweets />
      </div>
      <RightSideBar />
    </main>
  );
}
