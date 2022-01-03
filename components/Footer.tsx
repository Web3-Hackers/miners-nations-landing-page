import styles from "../styles/nav.module.css";

export default function Footer() {
  return (
    <div className="bg-black bg-opacity-90">
      <div className="flex justify-center">
        <div className="flex items-center py-6">
          <a
            href="https://www.youtube.com/channel/UCMoV4O5ULbF9VXtQ7K5I3Dg"
            target="_blank"
            className="text-blue-300 hover:text-white px-6"
          >
            YouTube
          </a>
          <a
            href="https://theminersnation.medium.com"
            target="_blank"
            className="text-blue-300 hover:text-white px-6"
          >
            Medium
          </a>
          <a
            href="https://instagram.com/theminersnation_"
            target="_blank"
            className="text-blue-300 hover:text-white px-6"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/theminersnation"
            target="_blank"
            className="text-blue-300 hover:text-white px-6"
          >
            Twitter
          </a>
          <a
            href="https://www.reddit.com/u/theminersnation"
            target="_blank"
            className="text-blue-300 hover:text-white px-6"
          >
            Reddit
          </a>
          <a
            href="https://t.me/TheMinersNation/"
            target="_blank"
            className="text-blue-300 hover:text-white px-6"
          >
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
