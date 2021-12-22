export default function Button({ text }: { text: string }) {
  return (
    <button className="" onClick={() => handleClick()}>
      {text}
    </button>
  );
}
