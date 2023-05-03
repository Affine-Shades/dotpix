import styles from "./Canvas.module.css";
import useSetupCanvas from "../../hooks/useSetupCanvas";
import { Window, Coordinates } from "../../types";
import { useCallback, useEffect, useState } from "react";
import usePaint from "../../hooks/usePaint";
import useKeyPress from "../../hooks/useKeyPress";
import useCanvas from "../../hooks/useCanvas";
import { downloadImage, handleOffset } from "../../utils/canvasUtil";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import useMultipleKeyPress from "../../hooks/useMultipleKeyPress";

type CanvasProps = {
  windowSize: Window;
};

function Canvas({ windowSize }: CanvasProps) {
  const size = useSelector((state: RootState) => state.size.value); // brush/grid size
  const shade = useSelector((state: RootState) => state.colour.currentShade);
  const keyPressed = useMultipleKeyPress();

  const overlayCanvasRef = useSetupCanvas();
  const canvasRef = useSetupCanvas();
  const paintOverlayCanvas = usePaint(overlayCanvasRef);
  const paintCanvas = usePaint(canvasRef);
  const updateCanvas = useCanvas(canvasRef);

  const [coordinates, setCoordinates] = useState<Coordinates>({
    x: 0,
    y: 0,
  });

  useKeyPress("z", () => {
    updateCanvas((canvas) => {
      downloadImage(canvas);
    });
  });

  const handleCanvasKeyPress = useCallback(() => {
    const newPos = [0, 0];

    if (keyPressed["k"]) {
      newPos[1] += size;
    }

    if (keyPressed["l"]) {
      newPos[0] += size;
    }

    if (keyPressed["i"]) {
      newPos[1] -= size;
    }

    if (keyPressed["j"]) {
      newPos[0] -= size;
    }

    const next: Coordinates = {
      x: coordinates.x + newPos[0],
      y: coordinates.y + newPos[1],
    };

    if (keyPressed["f"]) {
      paintCanvas((ctx) => {
        ctx.fillStyle = shade;
        ctx.fillRect(coordinates.x, coordinates.y, size, size);
      });
    }

    if (keyPressed["e"]) {
      paintCanvas((ctx) => {
        ctx.fillStyle = "white";
        ctx.fillRect(coordinates.x, coordinates.y, size, size);
      });
    }

    setCoordinates(handleOffset(next, windowSize, size));
  }, [keyPressed, coordinates, paintCanvas, size, windowSize, shade]);

  useEffect(() => {
    addEventListener("keydown", handleCanvasKeyPress);
    return () => removeEventListener("keydown", handleCanvasKeyPress);
  }, [handleCanvasKeyPress]);

  // paint cursor
  useEffect(() => {
    paintOverlayCanvas((ctx) => {
      ctx.clearRect(0, 0, windowSize.w, windowSize.h);
      const stroke = 2;
      ctx.strokeStyle = shade;
      ctx.lineWidth = stroke;
      ctx.strokeRect(
        coordinates.x - stroke / 2,
        coordinates.y - stroke / 2,
        size + stroke,
        size + stroke
      );
    });
  });

  return (
    <>
      <canvas
        className={styles.canvas}
        ref={canvasRef}
        width={windowSize.w}
        height={windowSize.h}
      />
      <canvas
        className={styles.canvas}
        ref={overlayCanvasRef}
        width={windowSize.w}
        height={windowSize.h}
      />
    </>
  );
}

export default Canvas;
