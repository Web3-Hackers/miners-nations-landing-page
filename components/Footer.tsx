import styles from "../styles/nav.module.css";
import { AiOutlineYouTube } from "react-icons/ai";
import { AiOutlineMedium } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineReddit } from "react-icons/ai";
import { AiOutlineTelegram } from "react-icons/ai";

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
            <AiOutlineYouTube />
          </a>
          <a
            href="https://theminersnation.medium.com"
            target="_blank" rel="noreferrer"
            className="text-white font-bold px-6 hover:text-blue-500"
          >
            <AiOutlineMedium />
          </a>
          <a
            href="https://instagram.com/theminersnation_"
            target="_blank" rel="noreferrer"
            className="text-white font-bold px-6 hover:text-blue-500"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="https://twitter.com/theminersnation"
            target="_blank" rel="noreferrer"
            className="text-white font-bold px-6 hover:text-blue-500"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://www.reddit.com/u/theminersnation"
            target="_blank" rel="noreferrer"
            className="text-white font-bold px-6 hover:text-blue-500"
          >
            <AiOutlineReddit />
          </a>
          <a
            href="https://t.me/TheMinersNation/"
            target="_blank" rel="noreferrer"
            className="text-white font-bold px-6 hover:text-blue-500"
          >
            <AiOutlineTelegram />
          </a>
        </div>
      </div>
    </div>
  );
}
