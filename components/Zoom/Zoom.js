import Control from "../Control/Control";
import Magnification from "../Maginfication/Maginification";
import styles from "./Zoom.module.css";

const Zoom = () => {
  return (
    <div className={styles.zoom}>
      <Control width={"10%"} isLeft={true}>
        -
      </Control>
      <Magnification score={"1x"} />
      <Control width={"10%"} isRight={true}>
        +
      </Control>
    </div>
  );
};

export default Zoom;
