type Props = {
  color: string;
  time: string;
};

export default function HistoryItem({ color, time }: Props) {
  return (
    <div className='flex items-center gap-4 rounded-xl border border-border-dark bg-surface-dark p-3 transition-colors group'>
      <div
        className='size-7 md:size-12 rounded-full border border-white/10'
        style={{ backgroundColor: color }}
      />

      <div className='flex flex-col'>
        <span className='font-bold font-mono group-hover:text-primary'>
          {color}
        </span>

        <span className='text-xs text-white/40'>{time}</span>
      </div>
    </div>
  );
}
