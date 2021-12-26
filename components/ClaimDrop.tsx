import styles from "../styles/nav.module.css";

export default function ClaimDrop() {
  return (
    <div className="flex items-center flex-wrap md:flex-nowrap bg-blue-200 md:px-24 py-24 px-4 ">
      <div className="md:w-1/2 w-full">
        <p className="font-semibold text-4xl sm:text-4xl pb-4">Header Text</p>
        <p className="font-light sm:text-lg pb-4">
          Loren ipsum ipsum lorem ipsum doret loro lorem ipsum doret loro lorem
          ipsum lorem loro lorem ipsum doret lorum lorem ipsum lorem doro lorum
          lorem ipsum lorem doro.
        </p>
        <button
          className={`text-center p-3 bg-blue-500 font-bold rounded-md ${styles.btn}`}
        >
          Claim Drop
        </button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 w-full h-48 md:ml-4 ring-1 ring-blue-300"></div>
    </div>
  );
}
