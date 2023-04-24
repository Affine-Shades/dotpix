import styles from "./palette.module.css";

interface shadeProps {
  colour: string;
  shade: string;
  shadeNumber: number;
}

function Palette({ colour, shade, shadeNumber }: shadeProps) {
  return (
    <>
      <div className={styles.colour}>
        {`${colour} ${shadeNumber}`}
        <div
          style={{ backgroundColor: shade, width: "15px", height: "15px" }}
        />
      </div>
    </>
  );
}

export default Palette;
