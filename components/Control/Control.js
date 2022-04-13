import styles from "./Control.module.css";

const getVariantProperties = (variant = "orange") => {
  switch (variant) {
    case "blue":
      return {
        upperColor: "#1D9BF0",
        lowerColor: "#2171A7",
      };
    case "yellow":
      return {
        upperColor: "#EDF060",
        lowerColor: "#A4A721",
      };
    case "green":
      return {
        upperColor: "#80EF99",
        lowerColor: "#21A740",
      };
    case "orange":
      return {
        upperColor: "#ffd3a0",
        lowerColor: "#ffaf54",
      };
  }
};

const Control = ({ children, width, isLeft, isRight, variant }) => {
  return (
    <>
      <div
        className={styles.control}
        style={{
          width: width || "100%",
          borderTopLeftRadius: isRight ? 0 : "2px",
          borderBottomLeftRadius: isRight ? 0 : "2px",
          borderTopRightRadius: isLeft ? 0 : "2px",
          borderBottomRightRadius: isLeft ? 0 : "2px",
        }}
      >
        <div
          className={styles.upper}
          style={{
            backgroundColor: getVariantProperties(variant).upperColor,
            ...(variant === "blue"
              ? { paddingTop: "15.21px", paddingBottom: "14.26px" }
              : {}),
            ...(variant === "yellow"
              ? { paddingTop: "14px", paddingBottom: "11 px" }
              : {}),
            ...(variant === "green"
              ? { paddingTop: "12px", paddingBottom: "11px" }
              : {}),
          }}
        >
          {children}
        </div>
        <div
          className={styles.lower}
          style={{ backgroundColor: getVariantProperties(variant).lowerColor }}
        ></div>
        <div className={styles.shadow}></div>
      </div>
    </>
  );
};

export default Control;
