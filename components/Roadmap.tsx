import styles from "../styles/nav.module.css";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function Roadmap() {
  return (
    <div className="flex items-center flex-wrap md:flex-nowrap bg-blue-200 md:px-24 py-24 px-4 ">
      <div className="md:w-1/2 w-full">
        <p className="font-semibold text-4xl sm:text-4xl pb-4">Roadmap</p>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              SEPTEMBER 2021: Project ideation, team assembling and technology
              development. A rock-solid foundation was created to ignite the
              spark of a revolutionary digital space.
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              DESEMBER 2021: The project launches a public sale and IDO.
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Q1 2022: Exciting release of the first GamePad in-house game.
              Listing on Pancake Swap, Apply on Coingecko and Coinmarketcap.
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
            </TimelineSeparator>
            <TimelineContent>
              Q2 2022: Incubation of in-house projects, utilising farming and
              staking pools to maximize community profits.
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
            </TimelineSeparator>
            <TimelineContent>
              Q3 2022: Development of in-house projects, particularly The
              Minerss Nation Metaverse v1 completion.
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
            </TimelineSeparator>
            <TimelineContent>
              Q4 2022: Miners Nation releases second in-house game along with
              land sales and DEX.
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <button
          className={`text-center p-3 bg-blue-500 font-bold rounded-md ${styles.btn}`}
        >
          Roadmap
        </button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 w-full h-48 md:ml-4 ring-1 ring-blue-300"></div>
    </div>
  );
}
