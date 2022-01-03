export default function NavBar({ handleClick }: { handleClick: any }) {
  return (
    <div className="rounded-md w-full fixed z-10 left-0 top-3 bg-black bg-opacity-90 flex items-center text-white font-bold px-4 py-3 md:py-4 justify-between shadow-md">
      <p className="sm:text-xl text-lg sm:pr-4 pr-2 border-r cursor-pointer border-gray-500">
        Miner&apos;s <span className="text-blue-400">Nation</span>
      </p>
      <div className=" items-center pl-4 hidden md:flex">
        <NavLinks text="Home" />
        <NavLinks text="About" />
        <NavLinks text="Roadmap" />
        <NavLinks text="Tokenomics" />
        <NavLinks text="Team" />
        <NavLinks text="Join Pre-Sale" />
        <NavLinks text="Claim Airdrop" />
      </div>
      <span
        className="block md:hidden p-1 sm:p-2 rounded-full bg-white ease-in ml-4 cursor-pointer"
        onClick={() => handleClick()}
      >
        <Hamburger />
      </span>
    </div>
  );
}

function NavLinks({ text }: { text: String }) {
  return (
    <p className="pr-2 pl-2 lg:pr-4  text-sm cursor-pointer ease-in hover:text-blue-500">
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
