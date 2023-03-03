import SideBarLinks from './SideBarLinks';
import SideBarProfile from './SideBarProfile';

export default function SideBar() {
  return (
    <div className='hidden sticky top-0 col-span-1 xl:col-span-2 sm:flex flex-col h-screen pt-1 pb-2 sm:items-end xl:block'>
      <SideBarLinks />
      <SideBarProfile />
    </div>
  );
}
