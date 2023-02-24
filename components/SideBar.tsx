import SideBarLink from './SideBarLink';
import SideBarProfile from './SideBarProfile';

export default function SideBar() {
  return (
    <div className='border-r border-r-slate-200 flex flex-col col-span-1 h-screen pt-[5px] pb-[10px] items-center sm:items-end xl:p-5 xl:block'>
      <SideBarLink />
      <SideBarProfile />
    </div>
  );
}
