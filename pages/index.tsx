import type { NextPage } from "next";
import { useState } from "react";
import { AiOutlineYouTube } from "react-icons/ai";
import { AiOutlineMedium } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineReddit } from "react-icons/ai";
import { AiOutlineTelegram } from "react-icons/ai";
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
      </Head>

      <main className={`relative ${click && "overflow-y-hidden h-screen"}`}>
        {click && <Overlay handleClick={handleClick} />}
        <Header handleClick={handleClick} />
        <HomeSect />
        <ClaimDrop />
        <About />
        <Roadmap />
        <Tokenomics />
        <Team />
        <Presale />
        <Airdrop />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
