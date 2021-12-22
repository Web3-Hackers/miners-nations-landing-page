import { useMoralis } from "react-moralis";
import styles from "../styles/nav.module.css";

export default function NavBar() {
  const { authenticate, logout, isAuthenticated } = useMoralis();
  return (
    <div className="rounded-md mt-3 sm:mx-3 mx-1 bg-black bg-opacity-90 flex items-center text-white font-bold px-4 py-3 justify-between shadow-md">
      <div className="flex items-center">
        <p className="sm:text-xl text-lg sm:pr-4 pr-2 border-r cursor-pointer border-gray-500">
          Miner&apos;s <span className="text-blue-400">nation</span>
        </p>
        <div className=" items-center pl-4 hidden md:flex">
          <NavLinks text="Home" />
          <NavLinks text="About" />
          <NavLinks text="How it works" />
          <NavLinks text="Press" />
          <NavLinks text="Request demo" />
          <NavLinks text="Shop" />
        </div>
      </div>
      <div className="flex items-center">
        {!isAuthenticated ? (
          <button
            onClick={() => authenticate()}
            className={`text-center p-1.5 sm:p-3 bg-blue-500 font-bold rounded-md ${styles.btn} hidden sm:block`}
          >
            Connect Wallet
          </button>
        ) : (
          <button
            onClick={() => logout()}
            className={`text-center p-1.5 sm:p-3 bg-blue-500 font-bold rounded-md ${styles.btn} hidden sm:block`}
          >
            Disconnect
          </button>
        )}
        <span className="block md:hidden p-1 sm:p-2 rounded-full bg-white ease-in ml-4 cursor-pointer">
          <Hamburger />
        </span>
      </div>
    </div>
  );
}

function NavLinks({ text }: { text: string }) {
  return (
    <p className="pr-2 pl-2 lg:pr-4 lg:pr-4  text-sm cursor-pointer ease-in hover:text-blue-500">
      {text}
    </p>
  );
}

function Hamburger() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="text-blue-500 ease-in w-6 h-6"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}
