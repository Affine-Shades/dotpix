import Canvas from "./components/canvas/Canvas";
import Header from "./components/header/Header";
import useWindowSize from "./hooks/useWindowSize";
import Toolbar from "./components/toolbar/Toolbar";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  const size = useSelector((state: RootState) => state.size.value);
  const colour = useSelector((state: RootState) => state.colour.currentColour);
  const shade = useSelector((state: RootState) => state.colour.currentShade);

  const windowSize = useWindowSize(size);
  const shadeNumber = useSelector(
    (state: RootState) => state.colour.shadeIndex
  );

  return (
    <>
      <Header />
      <Canvas windowSize={windowSize} />
      <Toolbar shade={shade} shadeNumber={shadeNumber} colour={colour} />
    </>
  );
}

export default App;
