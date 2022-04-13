import styles from "./Magnification.module.css";

const Magnification = ({ score }) => {
  return (
    <div className={styles.magnification}>
      <div className={styles.upper}></div>
      <div className={styles.lower}>{score}</div>
    </div>
  );
};

export default Magnification;
