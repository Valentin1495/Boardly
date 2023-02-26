import Link from 'next/link';

interface Row {
  RowIcon: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  >;
  title: string;
  href: string;
}

export default function SideBarRow({ RowIcon, title, href }: Row) {
  return (
    <Link href={`/${href}`} className='sidebar-link'>
      <RowIcon className='sidebar-icon' />
      <span className='sidebar-text'>{title}</span>
    </Link>
  );
}
