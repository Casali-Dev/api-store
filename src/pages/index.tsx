import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>API Store</title>
        <meta name="description" content="Fake store with fake API" />
        <link rel="shortcut icon" href="favicon.svg" type="image/svg" />
      </Head>

      <footer className={styles.footer}>
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="API Store Logo" layout="fill" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
