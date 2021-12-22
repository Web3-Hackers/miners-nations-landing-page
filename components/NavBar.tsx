import { useMoralis } from "react-moralis";

export default function NavBar() {
  const { authenticate, logout, isAuthenticated } = useMoralis();
  return (
    <div className="rounded-md mt-3 mx-3 bg-black bg-opacity-90 flex items-center text-white font-semibold p-2">
      <a href="/" className="text-xl border-r pr-4 border-black bg-opacity-20">
        Miner&apos;s <span className="text-blue-400">nation</span>
      </a>
      <div className="flex items-center font-bold">
        <a href="/" className="pr-3 pl-3 uppercase text-xs">
          Home
        </a>
        <a href="/" className="pr-3 pl-3 uppercase text-xs">
          About
        </a>
        <a href="/" className="pr-3 pl-3 uppercase text-xs">
          How it works
        </a>
        <a href="/" className="pr-3 pl-3 uppercase text-xs">
          Press
        </a>
        <a href="/" className="pr-3 pl-3 uppercase text-xs">
          Request demo
        </a>
        <a href="/" className="pr-3 pl-3 uppercase text-xs">
          Shop
        </a>
      </div>
      {!isAuthenticated ? (
        <button
          onClick={() => authenticate()}
          className="text-center p-2 bg-blue-400"
        >
          Connect Wallet
        </button>
      ) : (
        <button onClick={() => logout()}>Disconnect</button>
      )}
    </div>
  );
}
