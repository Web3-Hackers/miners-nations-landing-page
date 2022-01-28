import { Box } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import styles from "../styles/nav.module.css";
import { useMoralis } from "react-moralis";

export default function NavBar({ handleClick }: { handleClick: any }) {
  const { authenticate, logout, isAuthenticated } = useMoralis();

  return (
    <div className='w-full fixed z-10 left-0 bg-black flex items-center text-white font-bold px-4 py-3 md:py-4 shadow-md'>
      <Box sx={{ ml: 5 }}>
        <img
          src='./logo.svg'
          alt='Picture of the author'
          width='150vw'
        />
      </Box>
      <Grid container spacing={1} sx={{ padding: "0px", marginLeft: 2 }}>
        <Grid item xs={1}>
          <NavLinks text='Home' />
        </Grid>
        <Grid item xs={1} textAlign='center'>
          <NavLinks text='About' />
        </Grid>
        <Grid item xs={2} textAlign='center'>
          <NavLinks text='Claim Airdrop' />
        </Grid>
        <Grid item xs={1} textAlign='center'>
          <NavLinks text='NFTS' />
        </Grid>
        <Grid item xs={2} textAlign='center'>
          <NavLinks text='Tokenomics' />
        </Grid>
        <Grid item xs={2} textAlign='center'>
          <NavLinks text='Roadmap' />
        </Grid>
        <Grid item xs={1} textAlign='center'>
          <NavLinks text='Team' />
        </Grid>
        <Grid item md={2} xs={2}>
          <Box
            sx={{
              backgroundColor: "#FFC11C",
              width: "fit-content",
              border: "3px black solid",
            }}
          >
            <button
              onClick={() => authenticate()}
              className={`text-center p-2 font-bold ${styles.btn}`}
              style={{
                color: "black",
                backgroundColor: "#FFC11C",
                margin: "0.1rem",
                border: "3px black solid",
                fontSize: '0.7rem'
              }}
            >
              JOIN PRESALE
            </button>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{ display: "grid", ml: 3, gridTemplateColumns: "repeat(6, 1fr)" }}
      ></Box>
      <span
        className='block md:hidden p-1 sm:p-2 rounded-full bg-white ease-in ml-4 cursor-pointer'
        onClick={() => handleClick()}
      >
        <Hamburger />
      </span>
    </div>
  );
}

function NavLinks({ text }: { text: String }) {
  return <p className='pl-2 cursor-pointer hover:text-blue-500'>{text}</p>;
}

function Hamburger() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='text-blue-500 ease-in w-6 h-6'
      viewBox='0 0 20 20'
      fill='currentColor'
    >
      <path
        fillRule='evenodd'
        d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
        clipRule='evenodd'
      />
    </svg>
  );
}
