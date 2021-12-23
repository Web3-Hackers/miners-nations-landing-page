import NavBar from "./NavBar";
import { useMoralis } from "react-moralis";
import styles from "../styles/nav.module.css";

export default function Header() {
  const { authenticate, logout, isAuthenticated } = useMoralis();
  return (
    <div className="w-screen bg-blue-200 h-screen">
      <div className="mx-2 sm:mx-3 relative">
        <NavBar />
      </div>
      <div className="md:pt-56 pt-48 flex flex-col items-center">
        <p className="text-center font-semibold text-4xl sm:text-6xl text-black">
          Miner&apos;s <span className="text-blue-500">nation</span>
        </p>
        <p className="font-light w-full px-4 md:w-1/2 sm:text-lg text-center my-4">
          Loren ipsum ipsum lorem ipsum doret loro lorem ipsum doret loro lorem
          ipsum lorem loro lorem ipsum doret lorum lorem ipsum lorem doro lorum
          lorem ipsum lorem doro lorum lorem ipsum lorem doro lorum lorem ipsum
          lorem doro lorum lorem ipsum lorem doro.
        </p>
        {!isAuthenticated ? (
          <button
            onClick={() => authenticate()}
            className={`text-center p-3 bg-blue-500 font-bold rounded-md ${styles.btn}`}
          >
            Connect Wallet
          </button>
        ) : (
          <button
            onClick={() => logout()}
            className={`text-center p-3 bg-blue-500 font-bold rounded-md ${styles.btn}`}
          >
            Disconnect
          </button>
        )}
      </div>
    </div>
  );
}
