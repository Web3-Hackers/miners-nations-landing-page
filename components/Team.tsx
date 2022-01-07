import styles from "../styles/nav.module.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Team() {
  return (
    <div className="flex items-center flex-wrap md:flex-nowrap bg-blue-200 md:px-24 py-24 px-4 ">
      <div className="md:w-1/2 w-full">
        <p className="font-semibold text-4xl sm:text-4xl pb-4">Team Text</p>
        <p className="font-light sm:text-lg pb-4">
          Loren ipsum ipsum lorem ipsum doret loro lorem ipsum doret loro lorem
          ipsum lorem loro lorem ipsum doret lorum lorem ipsum lorem doro lorum
        </p>
        <Stack direction="row" spacing={2}>
          <Avatar alt="test1" src="1.jpg" />
          <Avatar alt="test2" src="2.jpg" />
          <Avatar alt="test3" src="3.jpg" />
        </Stack>
        <button
          className={`text-center p-3 bg-blue-500 font-bold rounded-md ${styles.btn}`}
        >
          Team
        </button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 w-full h-48 md:ml-4 ring-1 ring-blue-300"></div>
    </div>
  );
}
