import styles from "../styles/nav.module.css";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import * as Plotly from 'plotly.js';
import { Config, Datum, Layout, PlotData, newPlot, Template } from 'plotly.js';

var data = [{
  type: "pie",
  values: [2, 3, 4, 4],
  labels: ["Wages", "Operating expenses", "Cost of sales", "Insurance"],
  textinfo: "label+percent",
  textposition: "outside",
  automargin: true
}]

var layout = {
  height: 400,
  width: 400,
  margin: {"t": 0, "b": 0, "l": 0, "r": 0},
  showlegend: false
  }

Plotly.newPlot('myDiv', data, layout)

const data01 = [
  { name: 'Game Incitives', value: 15 },
  { name: 'Team', value: 12.5 },
  { name: 'Reserve', value: 10 },
  { name: 'Marketing', value: 10 },
  { name: 'Development', value: 10 },
  { name: 'Liquidity', value: 7.5 },
  { name: 'Partners & Advisors', value: 5 },
  { name: 'Airdrop', value: 5 },
  { name: 'Public Sale', value: 15 },
  { name: 'Private Sale', value: 10 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

export default function Tokenomics() {
  return (
    <div className="flex items-center justify-center flex-wrap md:flex-nowrap bg-blue-200 md:px-24 py-24 px-4 ">
      <div className="md:w-1/2 w-full">
        <p className="font-semibold text-4xl sm:text-4xl pb-4">Tokenomics Text</p>
        <p className="font-light sm:text-lg pb-4">
          Loren ipsum ipsum lorem ipsum doret loro lorem ipsum doret loro lorem
          ipsum lorem loro lorem ipsum doret lorum lorem ipsum lorem doro lorum
          lorem ipsum lorem doro.
        </p>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#3B82F6"
            label
          />
          <Pie dataKey="value" data={data01} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
        <div id='myDiv'></Div>
        <button
          className={`text-center p-3 bg-blue-500 font-bold rounded-md ${styles.btn}`}
        >
          Tokenomics
        </button>
      </div>
    </div>
  );
}
