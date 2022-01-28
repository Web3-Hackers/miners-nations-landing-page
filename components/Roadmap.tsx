import { Box } from "@mui/material";
import styles from "../styles/nav.module.css";

export default function Roadmap() {
  return (
    <Box
      className='md:px-24 pt-20 px-4 pb-10'
      sx={{
        color: "white",
        background:
          "linear-gradient(180deg, #0B1D27 39.64%, #35709C 123.19%, rgba(53, 112, 156, 0.19) 123.19%)",
      }}
    >
      <Box
        sx={{
          marginLeft: "1rem",
          marginRight: "1rem",
          background: "url(background.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50% 100%",
        }}
      >
        <h1
          style={{
            fontSize: "2em",
            color: "#FFC11C",
          }}
        >
          Roadmap
        </h1>
        <img
          src='./roadmap.svg'
          alt='assets'
          width={1000}
          height={500}
          style={{ margin: "auto" }}
        />
      </Box>
    </Box>
  );
}
