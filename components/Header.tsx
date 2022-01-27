import NavBar from "./NavBar";
import { useMoralis } from "react-moralis";
import styles from "../styles/nav.module.css";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import { calculateTimeLeft } from "./utility/helper";
export default function Header({ handleClick }: { handleClick: any }) {
  const { authenticate, logout, isAuthenticated } = useMoralis();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className='md:pb-0 h-screen'>
      <div className='md:mx-3 mx-2 relative'>
        <NavBar handleClick={handleClick} />
      </div>
      <div
        className='md:pt-56 pl-10'
        style={{
          backgroundImage: 'url("landing_page.jpg")',
          color: "white",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 'inherit'
        }}
      >
        <strong
          style={{
            fontWeight: "bold",
            color: "#6E9EAD",
          }}
        >
          PLAY AND EARN!
        </strong>
        <h1 style={{ fontFamily: "I Am A Designer", fontSize: "2em" }}>
          WELCOME TO MINER&apos;S NATION
        </h1>
        <p className='font-light w-full md:w-1/2 sm:text-lg mt-4 mb-8'>
          The Miners Nation is a first-person shooter game. Fight enemies and
          collect PC parts. Build, mint and mine on Miner’s Nation to earn Rig
          Token.
        </p>
        <p className='font-light w-full md:w-1/2 sm:text-lg my-4'>
          28th January to 28th February, 2022
        </p>
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
        {!isAuthenticated ? (
          <Box sx={{ backgroundColor: "#FFC11C", width: 'fit-content', border: '3px black solid',}}>
            <button
              onClick={() => authenticate()}
              className={`text-center p-3 font-bold ${styles.btn}`}
              style={{
                width: "243px",
                height: "68px",
                color: "black",
                backgroundColor: "#FFC11C",
                margin: "0.1rem",
                border: '3px black solid',
              }}
            >
              JOIN PRESALE
            </button>
          </Box>
        ) : (
          <button
            onClick={() => logout()}
            className={`text-center p-3 bg-blue-500 font-bold rounded-md ${styles.btn}`}
          >
            Disconnect
          </button>
        )}
        {/* <button
          className={`text-center p-3 bg-blue-500 font-bold rounded-md ${styles.btn}`}
        >
          Play Now
        </button> */}
      </div>
    </div>
  );
}
