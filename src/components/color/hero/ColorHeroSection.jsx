import ColorCircle from './ColorCircle';
import ColorCodeDisplay from './ColorCodeDisplay';
import ColorFormatSelector from './ColorFormatSelector';
import GenerateButton from './GenerateButton';

export default function ColorHeroSection({
  color,
  format,
  setFormat,
  onClick,
  onCopy,
}) {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-8 py-8 md:py-12'>
      <ColorCircle color={color} />

      <div className='flex flex-col items-center gap-6 z-10 w-full max-w-md'>
        <ColorFormatSelector format={format} setFormat={setFormat} />
        <ColorCodeDisplay color={color} format={format} onCopy={onCopy} />
        <GenerateButton onClick={onClick} />
      </div>
    </section>
  );
}
