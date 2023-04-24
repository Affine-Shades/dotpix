import { useEffect, useRef } from "react";

type allowedKeys = {
  [key: string]: boolean;
}

const keys: allowedKeys = {
  j: true,
  l: true,
  i: true,
  k: true,
  f: true,
  e: true,
};

function useMultipleKeyPress() {
  const keymap = useRef<allowedKeys>({});

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (keys[e.key]) {
        keymap.current[e.key] = true;        
      }      
    }

    function onKeyUp(e: KeyboardEvent) {
      if (keys[e.key]) {
        keymap.current[e.key] = false;
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return keymap.current;
}

export default useMultipleKeyPress;
