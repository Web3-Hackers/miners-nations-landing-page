import { Avatar, Box, Divider } from "@mui/material";

export default function Team() {
  return (
    <div
      className='flex items-center justify-center flex-wrap md:flex-nowrap md:px-24 py-10'
      style={{ backgroundColor: "#0B1D27" }}
    >
      <div className='md:w-1/2 w-full'>
        <p
          className='font-semibold text-4xl sm:text-4xl pb-4'
          style={{ color: "#FFC11C" }}
        >
          Team
        </p>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "fit-content",
            p: 2,
            m: 1,
            fontSize: "0.8rem",
          }}
        >
          <Box
            textAlign='center'
            sx={{
              p: 1,
              m: 1,
              minWidth: "55px",
              color: "white",
            }}
          >
            <Avatar
              alt='Travis Howard'
              src='/person1.png'
              sx={{ width: 120, height: 120, marginBottom: 2 }}
            />
            <p>Jenny Wilson</p>
            <p>Graphic Deesigner</p>
          </Box>
          <Box
            textAlign='center'
            sx={{
              p: 1,
              m: 1,

              minWidth: "55px",
              color: "white",
            }}
          >
            <Avatar
              alt='Travis Howard'
              src='/person3.png'
              sx={{ width: 120, height: 120, marginBottom: 2 }}
            />
            <p>Marvin McKinney</p>
            <p>President of Sales</p>
          </Box>
          <Box
            textAlign='center'
            sx={{
              p: 1,
              m: 1,

              minWidth: "55px",
              color: "white",
            }}
          >
            <Avatar
              alt='Travis Howard'
              src='/person2.png'
              sx={{ width: 120, height: 120, marginBottom: 2 }}
            />
            <p>Floyd Miles</p>
            <p>Marketing Coordinator</p>
          </Box>
          <Box
            textAlign='center'
            sx={{
              p: 1,
              m: 1,

              minWidth: "55px",
              color: "white",
            }}
          >
            <Avatar
              alt='Travis Howard'
              src='/person2.png'
              sx={{ width: 120, height: 120, marginBottom: 2 }}
            />
            <p>Floyd Miles</p>
            <p>Marketing Coordinator</p>
          </Box>
          <Box
            textAlign='center'
            sx={{
              p: 1,
              m: 1,

              minWidth: "55px",
              color: "white",
            }}
          >
            <Avatar
              alt='Travis Howard'
              src='/person2.png'
              sx={{ width: 120, height: 120, marginBottom: 2 }}
            />
            <p>Floyd Miles</p>
            <p>Marketing Coordinator</p>
          </Box>
        </Box>
      </div>
    </div>
  );
}
