import Head from "next/head";
import styles from "../styles/Home.module.css";
import CountBox from "../components/CountBox/CountBox";
import ImageBox from "../components/ImageBox/ImageBox";
import Zoom from "../components/Zoom/Zoom";
import ContentBox from "../components/ContentBox/ContentBox";
import Actions from "../components/Actions/Actions";
import Control from "../components/Control/Control";
import Description from "../components/Description/Description";

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/qiu5cht.css"
        ></link>
      </Head>
      <CountBox />
      <ImageBox />
      <ContentBox>
        <Zoom />
        <div className={styles.modes}>
          <Control width={"48%"}>Adarsh</Control>
          <Control width={"48%"}>Adarsh</Control>
        </div>
        <Actions />
      </ContentBox>
      <ContentBox>
        <Description type="about" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          <Control width={"48%"}>Adarsh</Control>
        </div>
      </ContentBox>
    </div>
  );
}
