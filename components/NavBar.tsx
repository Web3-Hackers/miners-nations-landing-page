import { useMoralis } from "react-moralis";
import styles from "../styles/nav.module.css";

export default function NavBar() {
  const { authenticate, logout, isAuthenticated } = useMoralis();
  return (
    <div className="rounded-md mt-3 mx-3 bg-black bg-opacity-90 flex items-center text-white font-bold px-4 py-3 justify-between shadow-md">
      <div className="flex items-center">
        <a href="/" className="text-xl border-r pr-4 border-gray-500">
          Miner&apos;s <span className="text-blue-400">nation</span>
        </a>
        <div className="flex items-center pl-4">
          <NavLinks text="Home" />
          <NavLinks text="About" />
          <NavLinks text="How it works" />
          <NavLinks text="Press" />
          <NavLinks text="Request demo" />
          <NavLinks text="Shop" />
          {/* <a href="/" className="pr-4 pl-4 text-sm ease-in hover:text-blue-500">
            Home
          </a>
          <a href="/" className="pr-4 pl-4 text-sm ease-in hover:text-blue-500">
            About
          </a>
          <a href="/" className="pr-4 pl-4 text-sm ease-in hover:text-blue-500">
            How it works
          </a>
          <a
            href="/"
            className="pr-4 pl-4  text-sm ease-in hover:text-blue-500"
          >
            Press
          </a>
          <a href="/" className="pr-4 pl-4 text-sm ease-in hover:text-blue-500">
            Request demo
          </a>
          <a href="/" className="pr-4 pl-4 text-sm ease-in hover:text-blue-500">
            Shop
          </a> */}
        </div>
      </div>
      {!isAuthenticated ? (
        <button
          onClick={() => authenticate()}
          className={`text-center p-3 bg-blue-500 font-bold rounded-md ${styles.btn}`}
        >
          Connect Wallet
        </button>
      ) : (
        <button onClick={() => logout()}>Disconnect</button>
      )}
    </div>
  );
}

function NavLinks({ text }) {
  return (
    <a href="/" className="pr-4 pl-4  text-sm ease-in hover:text-blue-500">
      {text}
    </a>
  );
}
