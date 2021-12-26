export default function Overlay({ handleClick }: { handleClick: any }) {
  return (
    <div className="bg-black h-screen w-screen relative px-16 md:hidden z-20">
      <span
        className="absolute right-0 top-0 sm:pr-16 pr-10 pt-10 cursor-pointer"
        onClick={() => handleClick()}
      >
        <CancelIcon />
      </span>
      <div className="flex flex-col pt-24">
        <MenuLinks text="Home" />
        <MenuLinks text="About" />
        <MenuLinks text="How it works" />
        <MenuLinks text="Press" />
        <MenuLinks text="Request demo" />
        <MenuLinks text="Shop" />
      </div>
    </div>
  );
}

function CancelIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MenuLinks({ text }: { text: String }) {
  return (
    <p className="pt-6 text-2xl cursor-pointer text-white font-bold ease-in hover:text-blue-500">
      {text}
    </p>
  );
}
