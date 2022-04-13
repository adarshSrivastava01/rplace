import styles from "./ContentBox.module.css";

const ContentBox = ({ children }) => {
  return (
    <div className={styles.contentbox}>
      <div className={styles.upper}>{children}</div>
      <div className={styles.lower}></div>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default ContentBox;
