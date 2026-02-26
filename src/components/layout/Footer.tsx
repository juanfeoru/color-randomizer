import { GitHub } from '../icons/Icons';
export default function Footer() {
  return (
    <footer className='border-t border-border-dark mt-auto bg-background-dark/30'>
      <div className='max-w-300 mx-auto px-6 py-8 flex flex-row items-center justify-between gap-6'>
        <p className='text-white/40 text-sm'>Made by @juanfeoru</p>

        <a
          className='text-white/40 hover:text-white transition-colors'
          href='https://github.com/juanfeoru/color-randomizer'
          target='_blank'
          rel='noreferrer noopener'
        >
          <span className='sr-only'>GitHub</span>
          <GitHub />
        </a>
      </div>
    </footer>
  );
}
