"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "/",
    name: <RiYoutubeFill />,
    link: "https://www.youtube.com/channel/UCIU4aq3ry_i8NgyinBytcTg",
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
    link: "https://www.linkedin.com/in/ronald-castromero-1a4b9b277/",
  },
  {
    path: "/",
    name: <RiGithubFill />,
    link: "https://github.com/Lumnaire",
  },
  {
    path: "/",
    name: <RiFacebookFill />,
    link: "https://web.facebook.com/profile.php?id=100070874882160",
  },
  {
    path: "/",
    name: <RiInstagramFill />,
    link: "https://www.instagram.com/lumnaire_coding/",
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <a
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
