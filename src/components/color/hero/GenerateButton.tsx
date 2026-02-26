type Props = {
  onClick: () => void;
};

export default function GenerateButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className='flex items-center gap-2 bg-primary hover:bg-green-400 text-background-dark px-8 py-4 rounded-full text-lg font-bold transition-all active:scale-95 mt-2 cursor-pointer'
      aria-label='Generate a new random color'
    >
      <span>Generate New Color</span>
    </button>
  );
}
