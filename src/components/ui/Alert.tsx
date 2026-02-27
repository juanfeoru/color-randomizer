import { motion } from 'framer-motion';

export default function Alert() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className='fixed bottom-8 left-1/2 -translate-x-1/2 z-50'
    >
      <div
        className='flex items-center gap-3 bg-surface-dark/80 backdrop-blur-md border border-white/10 text-white px-5 py-3 rounded-2xl shadow-2xl'
        role='status'
        aria-live='polite'
      >
        <div className='flex items-center justify-center size-8 rounded-full bg-primary/20 text-primary'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            aria-hidden='true'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M5 12l5 5l10 -10' />
          </svg>
        </div>
        <span className='font-bold text-sm tracking-wide'>
          COPIED TO CLIPBOARD
        </span>
      </div>
    </motion.div>
  );
}
