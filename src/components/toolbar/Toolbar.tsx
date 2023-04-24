import { useDispatch } from "react-redux";
import Palette from "../palette/Palette";
import styles from "./toolbar.module.css";
import {
  switchColour,
  decreaseShade,
  increaseShade,
} from "../../store/slices/colourSlice";
import useKeyPress from "../../hooks/useKeyPress";

type ToolbarProps = {
  shade: string;
  shadeNumber: number;
  colour: string;
};

function Toolbar({ shade, shadeNumber, colour }: ToolbarProps) {
  const dispatch = useDispatch();

  useKeyPress("c", () => {
    dispatch(switchColour());
  });

  useKeyPress("a", () => {
    dispatch(decreaseShade());
  });

  useKeyPress("s", () => {
    dispatch(increaseShade());
  });

  return (
    <menu className={styles.tools}>
      <ul className={styles.group}>
        <li className={styles.key}>
          <Palette shade={shade} shadeNumber={shadeNumber} colour={colour} />
        </li>
      </ul>
      <ul className={styles.group}>
        <li className={styles.key}>
          <span>C</span> Colour
        </li>
        <li className={styles.key}>
          <span>A/S</span> Shade
        </li>        
      </ul>
    </menu>
  );
}

export default Toolbar;
