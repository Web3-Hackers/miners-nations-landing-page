import styles from "../styles/nav.module.css";

export default function Team() {
  return (
    <div className="flex items-center justify-center flex-wrap md:flex-nowrap bg-blue-200 md:px-24 py-24 px-4 ">
      <div className="md:w-1/2 w-full">
        <p className="font-semibold text-4xl sm:text-4xl pb-4">Team</p>
        <p className="font-light sm:text-lg pb-4">
          Loren ipsum ipsum lorem ipsum doret loro lorem ipsum doret loro lorem
          ipsum lorem loro lorem ipsum doret Loren ipsum ipsum lorem ipsum doret loro lorem ipsum doret loro lorem
          ipsum lorem loro lorem ipsum doret Loren ipsum ipsum lorem ipsum doret loro lorem ipsum doret loro lorem
          ipsum lorem loro lorem ipsum doret
        </p>
        <button
          className={`text-center p-3 bg-blue-500 font-bold rounded-md ${styles.btn}`}
        >
          Team
        </button>
      </div>
    </div>
  );
}
