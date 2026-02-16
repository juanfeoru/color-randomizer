import React, { useEffect, useState } from 'react';

export default function Alert({ message, onClose, duration = 3000 }) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Dispara el slide-down antes de remover el alert
    const timer = setTimeout(() => {
      setClosing(true); // inicia animación de salida
      setTimeout(() => {
        if (onClose) onClose(); // elimina el alert después de la animación
      }, 300); // duración del slide-down
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 ${
        closing ? 'animate-slide-down' : 'animate-slide-up'
      }`}
    >
      <div className='flex items-center gap-3 bg-surface-dark border border-border-dark text-white px-6 py-4 rounded-xl shadow-lg'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-circle-check text-primary'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
          <path d='M9 12l2 2l4 -4' />
        </svg>
        <span className='font-medium text-sm md:text-base'>
          {message || 'Color copied to clipboard!'}
        </span>
      </div>
    </div>
  );
}
