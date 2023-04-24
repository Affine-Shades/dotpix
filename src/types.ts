export type Window = {
  w: number;
  h: number;
};

export type Coordinates = {
  x: number;
  y: number;
};

export type allowedKeys = {
  [key: string]: boolean;
};

export type PaintCallback = {
  (context: CanvasRenderingContext2D): void;
};

export type UpdateCanvasCallback = {
  (canvas: HTMLCanvasElement): void;
};
