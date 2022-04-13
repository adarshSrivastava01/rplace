import Head from "next/head";
import styles from "../styles/about.module.css";
import Control from "../components/Control/Control";

export default function About() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/qiu5cht.css"
        ></link>
      </Head>
      <div className={styles.about}>
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
          <br />
          <br />
          <br />
          <p>Some more details might come here.</p>
          <br />
          <br />
          <br />
          <p>Something about the creators comes here. Twitter links maybe.</p>
        </div>
        <div className={styles.action}>
          <Control width={"50%"} variant="green">
            TRY IT
          </Control>
        </div>
      </div>
    </>
  );
}
