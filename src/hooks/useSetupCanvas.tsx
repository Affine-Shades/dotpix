import { useRef } from "react";

function useSetupCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  return canvasRef;
}

export default useSetupCanvas;
