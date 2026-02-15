export default function HistoryHeader({ clearHistory }) {
  return (
    <section className='w-full max-w-200 flex flex-col gap-6 mt-8'>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='text-2xl font-bold text-white'>Recent Colors</h3>
          <p className='text-white/50 text-sm'>History of generated palettes</p>
        </div>
        <button
          onClick={clearHistory}
          className='text-primary text-sm font-bold hover:underline cursor-pointer'
        >
          Clear History
        </button>
      </div>
    </section>
  );
}
