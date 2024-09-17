import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flexBetween py-5 max-container padding-container'>
      <Link href='/'>
        <Image src='/hilink-logo.svg' alt='logo' width='74' height='29' />
      </Link>

      <ul className='hidden lg:block space-x-12'>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className='regular-16 text-gray-50 hover:font-bold transition-all'
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <button className='hidden lg:flex btn_dark_green rounded-full gap-3'>
        <Image src='/user.svg' alt='login' width='24' height='24' />
        <span className='bold-16'>Login</span>
      </button>

      <Image
        src='/menu.svg'
        alt='menu'
        width={32}
        height={32}
        className='lg:hidden cursor-pointer'
      />
    </nav>
  );
}
