import { hexToRgb, rgbToHsl } from '../../utils/colorUtils';
import { copyToClipboard } from '../../utils/copyToClipboard';

export default function ColorCodeDisplay({ color, format }) {
  let displayed;

  if (format === 'hex') {
    displayed = color.hex;
  }

  if (format === 'rgb') {
    const rgb = hexToRgb(color.hex);
    displayed = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }

  if (format === 'hsl') {
    const rgb = hexToRgb(color.hex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    displayed = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  }

  return (
    <div className='flex flex-col items-center gap-2 w-full'>
      <div
        className='flex items-center justify-between gap-3 bg-surface-dark px-6 py-4 rounded-2xl border border-border-dark hover:border-primary/50 transition-colors group cursor-pointer w-full'
        onClick={() => copyToClipboard(displayed)}
      >
        <h1 className='text-3xl font-black uppercase text-center w-full'>
          {displayed}
        </h1>

        <button className='text-white/50 group-hover:text-primary shrink-0 cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='1.25'
            stroke-linecap='round'
            stroke-linejoin='round'
            class='icon icon-tabler icons-tabler-outline icon-tabler-copy'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666' />
            <path d='M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1' />
          </svg>
        </button>
      </div>

      <p className='text-white/40 text-sm font-medium'>Click to copy code</p>
    </div>
  );
}
