export type Hex = `#${string}`;

export type HexColor = {
  hex: Hex;
  generatedAt: string;
};

export type ColorFormat = 'hex' | 'rgb' | 'hsl';

export type RgbColor = {
  r: number;
  g: number;
  b: number;
};

export type HslColor = {
  h: number;
  s: number;
  l: number;
};
