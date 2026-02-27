import { motion } from 'framer-motion';

type Props = {
  color: string;
  time: string;
};

export default function HistoryItem({ color, time }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className='flex items-center gap-4 rounded-xl border border-border-dark bg-surface-dark p-3 transition-colors group'
    >
      <div
        className='size-12 rounded-full border border-white/10'
        style={{ backgroundColor: color }}
      />

      <div className='flex flex-col'>
        <span className='font-bold font-mono group-hover:text-primary transition-colors'>
          {color}
        </span>

        <span className='text-xs text-white/40'>{time}</span>
      </div>
    </motion.div>
  );
}
