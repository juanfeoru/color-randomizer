import ColorStatCard from './ColorStatCard';
import { hexToRgb } from '../../utils/colorUtils';

export default function ColorStatsSection({ color }) {
  const rgb = hexToRgb(color.hex);

  return (
    <section className='w-full max-w-200'>
      <div className='grid grid-cols-3 gap-4'>
        <ColorStatCard
          label='RED'
          value={rgb.r}
          percentage={rgb.r}
          color='red'
        />
        <ColorStatCard
          label='GREEN'
          value={rgb.g}
          percentage={rgb.g}
          color='green'
        />
        <ColorStatCard
          label='BLUE'
          value={rgb.b}
          percentage={rgb.b}
          color='blue'
        />
      </div>
    </section>
  );
}
