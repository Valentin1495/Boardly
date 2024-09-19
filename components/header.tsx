import Image from 'next/image';
import SearchBox from './search-box';

export default function Header() {
  return (
    <header className='flex flex-col gap-3 sm:gap-0 sm:flex-row items-center sm:justify-between p-5'>
      <section className='flex items-center gap-1.5'>
        <Image src='/logo.svg' alt='logo' width={60} height={60} />
        <h1 className='text-primary font-bold text-xl'>Boardly</h1>
      </section>
      <SearchBox />
    </header>
  );
}
