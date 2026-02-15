export default function ColorFormatSelector({ format, setFormat }) {
  const specificFormats = ['hex', 'rgb', 'hsl'];

  return (
    <div className='flex p-1 bg-surface-dark border border-border-dark rounded-full'>
      {specificFormats.map((f) => (
        <button
          key={f}
          onClick={() => setFormat(f)}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
            format === f
              ? 'bg-primary text-background-dark shadow-sm'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          {f.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
