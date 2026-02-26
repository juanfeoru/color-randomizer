import type { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='relative flex min-h-screen flex-col'>
      <Header />
      <main className='grow flex flex-col items-center justify-start py-8 px-4 md:px-8 w-full max-w-300 mx-auto gap-8'>
        {children}
      </main>

      <Footer />
    </div>
  );
}
