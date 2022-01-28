import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import HomeSect from "../components/HomeSect";
import Overlay from "../components/Overlay";
import ClaimDrop from "../components/ClaimDrop";
import About from "../components/About";
import Roadmap from "../components/Roadmap";
import Tokenomics from "../components/Tokenomics";
import Team from "../components/Team";
import Presale from "../components/Presale";
import Airdrop from "../components/Airdrop";
import Footer from "../components/Footer";
import NftAssets from "../components/NftAssets";

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
        <meta name="description" content="First Person Shooter Blockchain Game" />
        <link rel="icon" href="/favicon.png" />
        <link href="http://fonts.cdnfonts.com/css/i-am-a-designer" rel="stylesheet" />
      </Head>

      <main className={`relative ${click && "overflow-y-hidden h-screen"}`}>
        {click && <Overlay handleClick={handleClick} />}
        <Header handleClick={handleClick} />
        <About />
        <Airdrop />
        <NftAssets />
        <Tokenomics />
        <Roadmap />
        <Team />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
