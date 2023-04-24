import { useState, useEffect } from "react";
import { Window } from "../types";

let adjustedOnce = false;

function useWindowSize(size: number): Window {
  const [windowSize, setWindowSize] = useState<Window>({
    w: 0,
    h: 0,
  });

  useEffect(() => {
    function adjustForSize(dimension: number) {
      return Math.floor(dimension / size) * size;
    }

    function handleResize() {
      if (adjustedOnce === false) {
        let offsetHeight = 0;
        const headerHeight =
          document.getElementsByTagName("header")[0]?.offsetHeight;
        const menuHeight =
          document.getElementsByTagName("menu")[0]?.offsetHeight;

        if (headerHeight && menuHeight) {
          offsetHeight = headerHeight + menuHeight;
        }

        setWindowSize((prevState) => ({
          ...prevState,
          w: adjustForSize(window.innerWidth),
          h: adjustForSize(window.innerHeight - offsetHeight),
        }));
        adjustedOnce = true;
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return windowSize;
}

export default useWindowSize;
