import { motion } from 'framer-motion';

type Props = {
  onClick: () => void;
};

export default function GenerateButton({ onClick }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: '#4ade80' }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className='flex items-center gap-2 bg-primary text-background-dark px-8 py-4 rounded-full text-lg font-bold transition-shadow hover:shadow-[0_0_20px_rgba(70,236,19,0.3)] mt-2 cursor-pointer'
      aria-label='Generate a new random color'
    >
      <span>Generate New Color</span>
    </motion.button>
  );
}
