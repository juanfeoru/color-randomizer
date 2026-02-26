import type { Dispatch, SetStateAction } from 'react';
import type { ColorFormat } from '../../../types/color.types';

type Props = {
  format: ColorFormat;
  setFormat: Dispatch<SetStateAction<ColorFormat>>;
};

export default function ColorFormatSelector({ format, setFormat }: Props) {
  const specificFormats: ColorFormat[] = ['hex', 'rgb', 'hsl'];

  return (
    <div
      className='flex p-1 bg-surface-dark border border-border-dark rounded-full'
      role='group'
      aria-label='Color format selector'
    >
      {specificFormats.map((f) => (
        <button
          key={f}
          onClick={() => setFormat(f)}
          aria-label={`Switch format to ${f.toUpperCase()}`}
          aria-pressed={format === f}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
            format === f
              ? 'bg-primary text-background-dark shadow-sm'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          {f.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
