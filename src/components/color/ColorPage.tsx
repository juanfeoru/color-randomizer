import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useColor } from '../../hooks/useColor';
import Alert from '../ui/Alert';
import ColorHeroSection from './hero/ColorHeroSection';
import ColorStatsSection from './stats/ColorStatsSection';
import ColorHistorySection from './history/ColorHistorySection';

export default function ColorPage() {
  const [showCopyAlert, setShowCopyAlert] = useState(false);
  const { color, history, format, setFormat, handleClick, clearHistory } =
    useColor();

  useEffect(() => {
    if (showCopyAlert) {
      const timer = setTimeout(() => {
        setShowCopyAlert(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showCopyAlert]);

  return (
    <div className='w-full flex flex-col items-center gap-8'>
      <ColorHeroSection
        color={color}
        format={format}
        setFormat={setFormat}
        onClick={handleClick}
        onCopy={() => setShowCopyAlert(true)}
      />

      <ColorStatsSection color={color} />

      <ColorHistorySection history={history} clearHistory={clearHistory} />

      <AnimatePresence>{showCopyAlert && <Alert />}</AnimatePresence>
    </div>
  );
}
