import styles from "./ImageBox.module.css";

const ImageBox = () => {
  return (
    <>
      <div className={styles.imagebox}>
        <div className={styles.upper}>
          <div className={styles.upper__1}></div>
          <div className={styles.upper__2}></div>
          <div className={styles.upper__3}>
            <img src={"/dummy.png"} alt={"Image"} />
          </div>
        </div>
        <div className={styles.lower}></div>
      </div>
      <div className={styles.shadow}></div>
    </>
  );
};

export default ImageBox;
