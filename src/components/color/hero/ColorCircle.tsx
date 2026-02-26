import type { HexColor } from '../../../types/color.types';

type Props = {
  color: HexColor;
};

export default function ColorCircle({ color }: Props) {
  return (
    <div className='group relative flex items-center justify-center'>
      <div
        className='absolute inset-0 blur-3xl opacity-20 rounded-full transition-all duration-500'
        style={{ backgroundColor: color.hex }}
      />

      <div
        className='relative size-64 md:size-80 rounded-full shadow-2xl flex items-center justify-center border-4 border-white/10 transition-transform duration-300 hover:scale-105'
        style={{ backgroundColor: color.hex }}
      >
        <span className='sr-only'>Current Color: {color.hex}</span>
      </div>
    </div>
  );
}
