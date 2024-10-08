import { createUser, getSession, login } from '@/actions/user.action';
import Background from '@/components/background';
import Board from '@/components/board';
import Header from '@/components/header';
import Quote from '@/components/quote';
import { Button } from '@/components/ui/button';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';

export default async function Home() {
  const session = await getSession();

  if (session) {
    await createUser(session.user.id);

    return (
      <main>
        <Background />
        <Header />
        <Quote />
        <Board />
      </main>
    );
  }

  return (
    <main className='flex flex-col items-center justify-center gap-3 min-h-screen'>
      <div className='flex items-center gap-3 mb-10'>
        <Image src='/logo.svg' alt='logo' width={60} height={60} />
        <h1 className='text-primary font-bold text-2xl'>Boardly</h1>
      </div>

      <form
        action={async () => {
          'use server';
          await login();
          revalidatePath('/');
        }}
      >
        <Button size='lg' className='font-semibold'>
          Get Started
        </Button>
      </form>
    </main>
  );
}
