import styles from "../styles/nav.module.css";
import { Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer
} from "recharts";
const data = [
  {
    name: "a",
    airdrop: 5,
    liquidty: 7.5,
    development: 10,
    gameIncentives: 10,
    marketing: 10,
    reserve: 10,
    loremlipsum: 10,
    coreTeam: 32.5,
    publicSale: 25,
  },
];

export default function Tokenomics() {
  return (
    <Box
      className='flex items-center justify-center flex-wrap md:flex-nowrap bg-blue-200 md:px-24 py-24 px-4'
      sx={{
        color: "white",
        background:
          " linear-gradient(180deg, #0B1D27 39.64%, #35709C 123.19%, rgba(53, 112, 156, 0.19) 123.19%)",
      }}
    >
      <div className='md:w-1/2 w-full'>
        <h1
          style={{
            fontSize: "2em",
            color: "#FFC11C",
          }}
        >
          Tokenomics
        </h1>
        <p className='font-light sm:text-lg pb-4'>
          Egestas volutpat sem et leo ipsum, diam. Mattis nisl etiam ut varius.
          Eget scelerisque purus odio scelerisque at leo viverra nam. Nisi
          viverra magna turpi.
        </p>

        {/* <ResponsiveContainer width={700} height='80%'> */}
          <BarChart
            layout='vertical'
            data={data}
            width={800}
            height={250}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis type='number' hide />
            <YAxis dataKey='name' hide reversed type='category' />
            <Legend align='right' layout='vertical' margin={{ left: 20 }} />
            <Bar dataKey='airdrop' stackId='a' fill='#F9DEDC' label={{ fill: 'red', fontSize: 20 }} />
            <Bar dataKey='liqudity' stackId='a' fill='#F2B8B5' />
            <Bar dataKey='development' stackId='a' fill='#EC928E' />
            <Bar dataKey='gameIncentives' stackId='a' fill='#E46962' />
            <Bar dataKey='marketing' stackId='a' fill='#DC362E' />
            <Bar dataKey='reserve' stackId='a' fill='#B3261E' />
            <Bar dataKey='loremLipsum' stackId='a' fill='#8C1D18' />
            <Bar dataKey='coreTeam' stackId='a' fill='#601410' />
            <Bar dataKey='publicSale' stackId='a' fill='#410E0B' />
          </BarChart>
        {/* </ResponsiveContainer> */}
      </div>
    </Box>
  );
}
