import Login from '@/components/Login';
import SideBar from '@/components/SideBar';

import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) return <Login />;

  return (
    <main className='grid grid-cols-7 md:grid-cols-4 max-w-7xl mx-auto'>
      <SideBar />
      <div className='col-span-6 md:col-span-3'>Home</div>
    </main>
  );
}
