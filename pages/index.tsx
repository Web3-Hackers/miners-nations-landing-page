import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import HomeSect from "../components/HomeSect";
import Overlay from "../components/Overlay";
import ClaimDrop from "../components/ClaimDrop";

const Home: NextPage = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    // console.log(click);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Miner&apos;s Nation</title>
        <meta name="description" content="First person shooter blockchain game" lang="en" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={`relative ${click && "overflow-y-hidden h-screen"}`}>
        {click && <Overlay handleClick={handleClick} />}
        <Header handleClick={handleClick} />
        <HomeSect />
        <ClaimDrop />
      </main>
    </div>
  );
};

export default Home;
