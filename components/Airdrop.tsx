import { Box, ButtonBase, Divider, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { calculateTimeLeft } from "./utility/helper";
import styles from "../styles/nav.module.css";

export default function Airdrop() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div
      className='flex items-center justify-center flex-wrap md:flex-nowrap bg-black md:px-24 py-24 px-5'
      style={{
        color: "white",
        textAlign: "center",
        backgroundImage: "url('moon_combined.png')",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "50%",
        backgroundPositionY: "20%",
      }}
    >
      <div className='md:w-1/2 w-full'>
        <p className='font-bold text-4xl pb-4'>$MINE AIRDROP</p>
        <p className='font-light text-3xl pb-4'>
          28th January to 28th February, 2022
        </p>
        <p className='font-light sm:text-lg pb-4 px-10'>
          Egestas volutpat sem et leo ipsum, diam. Mattis nisl etiam ut varius.
          Eget scelerisque purus odio scelerisque at leo viverra nam. Nisi
          viverra magna turpi.
        </p>
        <Grid container spacing={2}>
          <Grid item xs={3} sm></Grid>
          <Grid item xs={6} sm container>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "fit-content",
                p: 2,
                m: 1,
                backgroundColor: "#0B1D27",
                color: "white",
                textTransform: "uppercase",
                fontSize: "1.5rem",
                mb: 5,
              }}
            >
              <Box
                textAlign='center'
                sx={{
                  p: 1,
                  m: 1,
                  fontWeight: "700",
                  minWidth: "55px",
                }}
              >
                <p>{timeLeft.days}</p>
                <p>days</p>
              </Box>
              <Divider
                orientation='vertical'
                flexItem
                sx={{ borderWidth: "1.2px", backgroundColor: "white" }}
              />
              <Box
                textAlign='center'
                sx={{
                  p: 1,
                  m: 1,
                  fontWeight: "700",
                  minWidth: "55px",
                }}
              >
                <p>{timeLeft.hours}</p>
                <p>hours</p>
              </Box>
              <Divider
                orientation='vertical'
                flexItem
                sx={{ borderWidth: "1.2px", backgroundColor: "white" }}
              />
              <Box
                textAlign='center'
                sx={{
                  p: 1,
                  m: 1,
                  fontWeight: "700",
                  minWidth: "55px",
                }}
              >
                <p>{timeLeft.minutes}</p>
                <p>minutes</p>
              </Box>
              <Divider
                orientation='vertical'
                flexItem
                sx={{ borderWidth: "1.2px", backgroundColor: "white" }}
              />
              <Box
                textAlign='center'
                sx={{
                  p: 1,
                  m: 1,
                  fontWeight: "700",
                }}
              >
                <p>{timeLeft.seconds}</p>
                <p>seconds</p>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3} sm></Grid>
        </Grid>
        <Box
          sx={{
            backgroundColor: "#FFC11C",
            width: "fit-content",
            border: "3px black solid",
            margin: "auto",
          }}
        >
          <button
            // onClick={() => authenticate()}
            className={`text-center p-3 font-bold ${styles.btn}`}
            style={{
              width: "243px",
              height: "68px",
              color: "black",
              backgroundColor: "#FFC11C",
              margin: "0.1rem",
              border: "3px black solid",
            }}
          >
            JOIN PRESALE
          </button>
        </Box>
        {/* <img
          src='/moon_combined.png'
          style={{marginBottom: '-700px'}}
        ></img> */}
      </div>
    </div>
  );
}
