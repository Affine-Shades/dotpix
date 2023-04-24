import { Coordinates } from "../types";
import { Window } from "../types";

export const downloadImage = (canvas: HTMLCanvasElement) => {
  const encoded = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.setAttribute("href", encoded);
  link.setAttribute("download", "dotpix-drawing.png");
  link.dispatchEvent(
    new MouseEvent(`click`, {
      bubbles: true,
      cancelable: true,
      view: window,
    })
  );
};

export const handleOffset = (
  coordinates: Coordinates,
  window: Window,
  brushSize: number
) => {
  // handling offset
  if (coordinates.x < 0) {
    coordinates.x = window.w - brushSize;
  }
  if (coordinates.x >= window.w) {
    coordinates.x = 0;
  }
  if (coordinates.y < 0) {
    coordinates.y = window.h - brushSize;
  }
  if (coordinates.y >= window.h) {
    coordinates.y = 0;
  }

  return coordinates;
};
