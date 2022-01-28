import { Grid } from "@mui/material";

export default function NftAssets() {
  return (
    <Grid
      container
      spacing={0}
      alignItems='center'
      justifyContent='center'
      pt={10}
      sx={{
        color: "white",
        background:
          " linear-gradient(180deg, #0B1D27 39.64%, #35709C 123.19%, rgba(53, 112, 156, 0.19) 123.19%)",
      }}
      flexDirection='column'
    >
      <h1
        style={{
          fontSize: "2em",
          color: "#FFC11C",
        }}
      >
        NFT AND ASSETS
      </h1>
      <p className='font-light md:px-0 mb-5'>
        Egestas volutpat sem et leo ipsum, diam. Mattis nisl etiam ut varius.
      </p>
      <img src='./nftassets.png' alt='assets' width={1000} height={500} />
    </Grid>
  );
}
