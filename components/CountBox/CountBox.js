import Description from "../Description/Description";
import styles from "./CountBox.module.css";

const CountBox = () => {
  return (
    <div className={styles.countbox}>
      <div className={styles.countbox__upper}>
        <Description type={"count"} />
      </div>
      <div className={styles.countbox__lower__1}></div>
      <div className={styles.countbox__lower__2}></div>
    </div>
  );
};

export default CountBox;
