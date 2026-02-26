import type { Hex } from '../types/color.types';

export function generateRandomHex(): Hex {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
