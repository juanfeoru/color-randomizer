import type { HexColor } from '../types/color.types';

const STORAGE_KEY = 'color-history';

export function getColorHistory(): HexColor[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return [];

    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed)) return [];

    return parsed;
  } catch (error) {
    console.error('Error reading color history:', error);
    return [];
  }
}

export function saveColorHistory(history: HexColor[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('Error saving color history', error);
  }
}

export function clearColorHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing color history', error);
  }
}
