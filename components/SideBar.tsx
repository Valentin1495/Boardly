import SideBarLinks from './SideBarLinks';
import SideBarProfile from './SideBarProfile';

export default function SideBar() {
  return (
    <div className='fixed flex flex-col h-screen pt-[5px] pb-[10px] items-center sm:items-end p-5 xl:block'>
      <SideBarLinks />
      <SideBarProfile />
    </div>
  );
}
