import ColorStatCard from './ColorStatCard';

export default function ColorStatsSection() {
  return (
    <section className='w-full max-w-200'>
      <div className='grid grid-cols-3 gap-4'>
        <ColorStatCard label='RED' value={255} percentage={100} color='red' />
        <ColorStatCard label='GREEN' value={87} percentage={34} color='green' />
        <ColorStatCard label='BLUE' value={51} percentage={20} color='blue' />
      </div>
    </section>
  );
}
