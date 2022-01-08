import styles from "../styles/nav.module.css";

export default function About() {
  return (
    <div className="flex items-center flex-wrap md:flex-nowrap bg-blue-200 md:px-24 py-24 px-4 ">
      <div className="md:w-1/2 w-full">
        <p className="font-semibold text-4xl sm:text-4xl pb-4">About Text</p>
        <p className="font-light sm:text-lg pb-4">
          The Miners Nation is a first person shooter game where players fend off enemies to collect PC parts. Players can then exchange parts for Rig Token and purchase more parts to buidl a rig. Players also have the ability to mint parts on Open Sea as NFTs. These same NFTs can be combined to buidl a rig (Marketplace in development). Once a rig is assembled a player can then use the rig to mine Rig Token. Rig Token will be used to exchange for other tokens on exchanges.
        </p>
        <button
          className={`text-center p-3 bg-blue-500 font-bold rounded-md ${styles.btn}`}
        >
          About
        </button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 w-full h-48 md:ml-4 ring-1 ring-blue-300"></div>
    </div>
  );
}
