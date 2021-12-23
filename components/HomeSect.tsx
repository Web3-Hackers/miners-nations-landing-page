export default function HomeSect() {
  return (
    <div className="w-screen flex flex-col items-center">
      <p className="font-light md:w-1/2 w-screen px-4 md:px-0 pt-24 text-center">
        {" "}
        Loren ipsum ipsum lorem ipsum doret loro lorem ipsum doret loro lorem
        ipsum lorem loro lorem ipsum doret lorum lorem ipsum lorem doro lorum
        lorem ipsum lorem doro lorum lorem ipsum lorem doro lorum lorem ipsum
        lorem doro lorum lorem ipsum lorem doro.
      </p>
      <div className="flex items-center justify-center pb-10 pt-12 flex-col md:flex-row w-full">
        <div className="md:w-1/5 h-48 w-5/6 ring-1 ring-blue-300 hover:ring-blue-500 cursor-pointer ease-in md:mr-6 rounded-md"></div>
        <div className="md:w-1/5 h-48 w-5/6 ring-1 ring-blue-300 hover:ring-blue-500 cursor-pointer ease-in md:mr-6 mt-6 md:mt-0 rounded-md"></div>
        <div className="md:w-1/5 h-48 w-5/6 ring-1 ring-blue-300 hover:ring-blue-500 cursor-pointer ease-in md:mr-6  mt-6 md:mt-0  rounded-md"></div>
        <div className="md:w-1/5 h-48 w-5/6 ring-1 ring-blue-300 hover:ring-blue-500 cursor-pointer ease-in  mt-6 md:mt-0  rounded-md"></div>
      </div>
    </div>
  );
}
