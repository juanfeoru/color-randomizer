import { useState, useEffect } from 'react';
import type { HexColor, ColorFormat } from '../types/color.types';
import { generateRandomHex } from '../utils/generateRandomColor';
import { getCurrentTime } from '../utils/formatTime';
import { MAX_HISTORY } from '../constants/color.constants';
import {
  getColorHistory,
  saveColorHistory,
  clearColorHistory,
} from '../logic/storage';

export function useColor() {
  const [color, setColor] = useState<HexColor>({
    hex: '#FF5733',
    generatedAt: '',
  });

  const [format, setFormat] = useState<ColorFormat>('hex');

  const [history, setHistory] = useState<HexColor[]>(getColorHistory);

  useEffect(() => {
    saveColorHistory(history);
  }, [history]);

  const handleClick = () => {
    const newColor: HexColor = {
      hex: generateRandomHex(),
      generatedAt: getCurrentTime(),
    };

    setColor(newColor);

    setHistory((prev) => {
      const updatedHistory = [...prev, newColor];
      return updatedHistory.slice(-MAX_HISTORY);
    });
  };

  const clearHistory = () => {
    setHistory([]);
    clearColorHistory();
  };

  return { color, history, format, setFormat, handleClick, clearHistory };
}
