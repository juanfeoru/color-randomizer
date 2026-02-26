import { hexToRgb, rgbToHsl } from '../../../utils/colorUtils';
import { copyToClipboard } from '../../../utils/copyToClipboard';
import type { HexColor, ColorFormat } from '../../../types/color.types';

type Props = {
  color: HexColor;
  format: ColorFormat;
  onCopy: () => void;
};

export default function ColorCodeDisplay({ color, format, onCopy }: Props) {
  let displayed: string = '';

  if (format === 'hex') {
    displayed = color.hex;
  }

  if (format === 'rgb') {
    const rgb = hexToRgb(color.hex);

    if (!rgb) return null;

    displayed = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }

  if (format === 'hsl') {
    const rgb = hexToRgb(color.hex);

    if (!rgb) return null;

    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    displayed = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  }

  const handleCopy = () => {
    copyToClipboard(displayed);
    onCopy();
  };

  return (
    <div className='flex flex-col items-center gap-2 w-full'>
      <button
        className='flex items-center justify-between gap-3 bg-surface-dark px-6 py-4 rounded-2xl border border-border-dark hover:border-primary/50 transition-colors group cursor-pointer w-full h-fit'
        onClick={handleCopy}
        aria-label={`Copy color code: ${displayed}`}
      >
        <h1 className='text-xl md:text-3xl font-black uppercase text-center w-full'>
          {displayed}
        </h1>

        <div
          className='text-white/50 group-hover:text-primary shrink-0 transition-colors'
          aria-hidden='true'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.25'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-copy'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666' />
            <path d='M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1' />
          </svg>
        </div>
      </button>

      <p className='text-white/40 text-sm font-medium'>Click to copy code</p>
    </div>
  );
}
