type Props = {
  label: string;
  value: number;
  percentage: number;
  color: string;
};

export default function ColorStatCard({
  label,
  value,
  percentage,
  color,
}: Props) {
  return (
    <div className='flex flex-col items-center gap-1 rounded-2xl bg-surface-dark border border-border-dark p-6 transition-colors group'>
      <p className='text-white/60 text-sm font-medium'>{label}</p>

      <p className='text-white text-3xl font-bold'>{value}</p>

      <div
        className='w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden'
        role='progressbar'
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${label} intensity`}
      >
        <div
          className='h-full rounded-full'
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
