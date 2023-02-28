import SideBarLinks from './SideBarLinks';
import SideBarProfile from './SideBarProfile';

export default function SideBar() {
  return (
    <div className='fixed hidden sm:flex flex-col h-screen pt-[5px] pb-[10px] sm:items-end sm:p-5 xl:block'>
      <SideBarLinks />
      <SideBarProfile />
    </div>
  );
}
