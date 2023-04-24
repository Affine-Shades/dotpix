import { RefObject } from "react";
import { UpdateCanvasCallback } from "../types";

function useCanvas(canvasRef: RefObject<HTMLCanvasElement>) {
  const updateCanvas = (cb: UpdateCanvasCallback) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    cb(canvas);
  };

  return updateCanvas;
}

export default useCanvas;
