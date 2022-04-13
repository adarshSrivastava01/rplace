import styles from "./Actions.module.css";
import Control from "../Control/Control";

const Actions = () => {
  return (
    <div className={styles.actions}>
      <Control width={"20%"} variant={"blue"}>
        <div style={{ height: "21.53px", width: "26.49px" }}>
          <img src={"/twitter.png"} alt={"Twitter"} />
        </div>
      </Control>
      <Control width={"20%"} variant={"yellow"}>
        <div style={{ height: "26px", width: "24px" }}>
          <img src={"/download.png"} alt={"Twitter"} />
        </div>
      </Control>
      <Control width={"50%"} variant={"green"}>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={"/refresh.png"} alt={"Twitter"} />
          </div>
          <span>AGAIN</span>
        </div>
      </Control>
    </div>
  );
};

export default Actions;
