import { useCallback, useEffect } from "react";

function useKeyPress(targetKey: string, callback: () => void) {
  const downHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === targetKey) {
        callback();
      }
    },
    [callback, targetKey]
  );

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => window.removeEventListener("keydown", downHandler);
  }, [downHandler]);
}

export default useKeyPress;
