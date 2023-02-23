/** @jsxImportSource @emotion/react */
'use client';

import { useSession } from 'next-auth/react';
import SideBarLink from './SideBarLink';
import SideBarProfile from './SideBarProfile';

export default function SideBar() {
  const { data: session } = useSession();
  const username = session?.user?.name;
  const profilePic = session?.user?.image;
  const email = session?.user?.email;
  const idx = email?.indexOf('@');
  const emailId = email?.slice(0, idx);
  const breakpoints = [640, 768, 1024, 1280];
  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  return (
    <div
      className=' border-r border-r-slate-200   
            '
      css={{
        display: 'flex',
        flexDirection: 'column',
        gridColumn: 'span 1 / span 1',
        borderRight: '1px solid rgb(226 232 240)',
        height: '100vh',
        padding: '5px 0 10px 0',
        alignItems: 'center',
        [mq[0]]: {
          alignItems: 'flex-end',
        },
        [mq[3]]: {
          padding: 20,
          display: 'block',
        },
      }}
    >
      <SideBarLink emailId={emailId!} />
      <SideBarProfile
        session={session}
        username={username as string}
        emailId={emailId!}
        profilePic={profilePic as string}
      />
    </div>
  );
}
