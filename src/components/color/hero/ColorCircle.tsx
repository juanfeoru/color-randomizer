import { motion, AnimatePresence } from 'framer-motion';
import type { HexColor } from '../../../types/color.types';

type Props = {
  color: HexColor;
};

export default function ColorCircle({ color }: Props) {
  return (
    <div className='group relative flex items-center justify-center'>
      <motion.div
        className='absolute inset-0 blur-3xl opacity-20 rounded-full transition-all duration-500'
        animate={{ backgroundColor: color.hex }}
        transition={{ duration: 0.5 }}
      />

      <AnimatePresence mode='wait'>
        <motion.div
          key={color.hex}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.1, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25,
            opacity: { duration: 0.2 },
          }}
          className='relative size-64 md:size-80 rounded-full shadow-2xl flex items-center justify-center border-4 border-white/10 transition-transform duration-300 hover:scale-105'
          style={{ backgroundColor: color.hex }}
        >
          <span className='sr-only'>Current Color: {color.hex}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
