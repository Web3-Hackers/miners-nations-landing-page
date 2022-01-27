import Image from "next/image";
import styles from "../styles/nav.module.css";
import Grid from "@mui/material/Grid";

export default function About() {

  return (
    <div className='pl-10 bg-black px-4 py-10' style={{ color: "white" }}>
      <Grid container spacing={2}>
        <Grid item md={3} />
        <Grid item md={2} xs={12}>
          <div className=''>
            <h1
              style={{
                fontSize: "2em",
                color: "#FFC11C",
              }}
            >
              ABOUT MINER&apos;S NATION
            </h1>
            <p className='font-light sm:text-lg pb-4'>
              The Miners Nation is a first person shooter game where players
              fend off enemies to collect PC parts. Players can then exchange
              parts for Rig Token and purchase more parts to build a rig.
              Players also have the ability to mint parts on Open Sea as NFTs.
            </p>
            <p className='font-light sm:text-lg pb-4'>
              These same NFTs can be combined to buidl a rig (Marketplace in
              development). Once a rig is assembled a player can then use the
              rig to mine Rig Token. Rig Token will be used to exchange for
              other tokens on exchanges.
            </p>
          </div>
        </Grid>
        <Grid item md={4} sx={{ display: "block" }} xs={12}>
          <Image
            src='/gameplay.jpg'
            alt='gameplay'
            width={1000}
            height={500}
          />
        </Grid>
        <Grid item md={3} />
      </Grid>
    </div>
  );
}
