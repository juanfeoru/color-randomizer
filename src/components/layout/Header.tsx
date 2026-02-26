import icon from '../../assets/icon.webp';
import { Palette, Settings } from '../icons/Icons';

export default function Header() {
  return (
    <header className='border-b border-border-dark bg-background-dark/50 backdrop-blur-md sticky top-0 z-50'>
      <nav className='px-4 md:px-10 py-3 flex items-center justify-between max-w-300 mx-auto w-full'>
        <div className='flex items-center gap-4 text-white'>
          <div className='text-primary'>
            <Palette />
          </div>
          <a href='/' className='text-lg font-bold'>
            Color Randomizer
          </a>
        </div>
        <div className='flex items-center gap-4'>
          <button
            className='flex items-center justify-center rounded-full size-10 bg-surface-dark text-white hover:bg-primary hover:text-background-dark transition-colors duration-200 cursor-pointer'
            aria-label='Settings'
          >
            <Settings />
          </button>
          <img
            src={icon}
            alt='Color Randomizer Icon'
            className='rounded-full size-10 border-2 border-primary'
          />
        </div>
      </nav>
    </header>
  );
}
