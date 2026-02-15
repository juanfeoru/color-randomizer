import { useState } from 'react';
import ColorHeroSection from './hero/ColorHeroSection';
import ColorStatsSection from './stats/ColorStatsSection';
import ColorHistorySection from './history/ColorHistorySection';
import AlertToast from '../ui/AlertToast';
import { useColor } from '../../hooks/useColor';

export default function ColorPage() {
  const { color, history, format, setFormat, handleClick, clearHistory } =
    useColor();

  const [showAlert, setShowAlert] = useState(false);

  const handleGenerateColor = () => {
    handleClick();
    setShowAlert(true);
  };

  return (
    <div className='w-full flex flex-col items-center gap-8'>
      <ColorHeroSection
        color={color}
        format={format}
        setFormat={setFormat}
        onClick={handleGenerateColor}
      />

      <ColorStatsSection />

      <ColorHistorySection history={history} clearHistory={clearHistory} />

      {showAlert && <AlertToast onClose={() => setShowAlert(false)} />}
    </div>
  );
}
