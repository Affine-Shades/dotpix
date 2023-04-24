import { RefObject } from "react";
import { PaintCallback } from "../types";

function usePaint(canvasRef: RefObject<HTMLCanvasElement>) {
  const paintCanvas = (cb: PaintCallback) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    cb(context);
  };

  return paintCanvas;
}

export default usePaint;
