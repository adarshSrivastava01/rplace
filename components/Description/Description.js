import styles from "./Description.module.css";

const Description = ({ type, children }) => {
  return (
    <div className={styles.inner}>
      <div className={styles.innerbox__1}></div>
      <div className={styles.innerbox__2}></div>
      <div
        className={styles.innerbox__3}
        style={type === "count" ? { height: "40px" } : {}}
      >
        {type === "count" ? (
          "894, 1249"
        ) : (
          <div className={styles.description}>
            <div className={styles.description__heading}>
              <div className={styles.description__image}>
                <img src={"/twitter.png"} alt={"Image"} />
              </div>
              <span>Placeholder</span>
            </div>
            <p>
              A canvas explorer built to appreciate the details in r/place 2022.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;
