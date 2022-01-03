import styles from "../styles/nav.module.css";

export default function Footer() {
  return (
    <div className="bg-black bg-opacity-90">
      <div className="flex justify-center">
        <div className="flex items-center py-6 hover:text-blue-500">
          <a
            href="https://www.youtube.com/channel/UCMoV4O5ULbF9VXtQ7K5I3Dg"
            target="_blank" rel="noreferrer"
            className="text-white font-bold px-6 hover:text-blue-500"
          >
            YouTube
          </a>
          <a
            href="https://theminersnation.medium.com"
            target="_blank" rel="noreferrer"
            className="text-white font-bold px-6 hover:text-blue-500"
          >
            Medium
          </a>
          <a
            href="https://instagram.com/theminersnation_"
            target="_blank" rel="noreferrer"
            className="text-white font-bold px-6 hover:text-blue-500"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/theminersnation"
            target="_blank" rel="noreferrer"
            className="text-white font-bold px-6 hover:text-blue-500"
          >
            Twitter
          </a>
          <a
            href="https://www.reddit.com/u/theminersnation"
            target="_blank" rel="noreferrer"
            className="text-white font-bold px-6 hover:text-blue-500"
          >
            Reddit
          </a>
          <a
            href="https://t.me/TheMinersNation/"
            target="_blank" rel="noreferrer"
            className="text-white font-bold px-6 hover:text-blue-500"
          >
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
