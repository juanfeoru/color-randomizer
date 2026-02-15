import { useState } from 'react';

export function useColor() {
  const MAX_HISTORY = 8;

  // Estado que guarda el color actual
  // Es un objeto porque modela una entidad completa:
  // - hex -> valor del color
  // - generatedAt -> momento en que se generó
  const [color, setColor] = useState({
    hex: '#FF5733',
    generatedAt: '',
  });

  const [format, setFormat] = useState('hex');

  const [history, setHistory] = useState([]);

  // Se ejecuta cuando el usuario haga click
  // No se ejecuta al rendereizar, solo cuando se llama explícitamente
  const handleClick = () => {
    // Genera un número aleatorio entre 0 y 16777215 (24 bits de color)
    // Se convierte a hexadecimal
    // Se asegura que tenga 6 caracteres
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;

    // Obtiene la hora actual formateada automáticamente
    // 'en-US' define el formato (ej: 10:42:15 AM)
    const currentColorDate = new Date().toLocaleTimeString('en-US');

    const newColor = {
      hex: randomColor,
      generatedAt: currentColorDate,
    };

    // Actualiza el estado con el nuevo color
    // Provoca un re-render del componente que use este hook
    setColor(newColor);

    setHistory((prev) => {
      const updatedHistory = [...prev, newColor];
      return updatedHistory.slice(-MAX_HISTORY);
    });
  };

  const clearHistory = () => {
    setHistory([]);
  };

  // El componente que use este hook podrá:
  return { color, history, format, setFormat, handleClick, clearHistory };
}
