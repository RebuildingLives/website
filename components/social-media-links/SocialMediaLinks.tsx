import React from "react";
import yt from "@/public/icons/youtube.svg";
import linkedin from "@/public/icons/linkedin-icon.svg";
import fb from "@/public/icons/facebook-icon.svg";
import twitter from "@/public/icons/twitter.png";
import Image from "next/image";

const SocialMediaLinks = () => {
  return (
    <ul className="mt-2 items-center gap-4 flex justify-center">
      {SM_LINKS.map(({ id, link, icon, name }) => {
        return (
          <li key={id}>
            <a rel="noopener" target="_blank" href={link}>
              <Image
                src={icon}
                width={name === "Twitter" ? 20 : 30}
                height={name === "Twitter" ? 20 : 30}
                className="cursor-pointer"
                title={name}
                aria-label={name}
                role="button"
                alt={name}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaLinks;

const SM_LINKS = [
  {
    id: 1,
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/LivesRebuilding",
  },
  {
    id: 2,
    name: "YouTube",
    icon: yt,
    link: "https://www.youtube.com/@rebuildinglivesuk1265",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/company/rebuilding-lives-uk/?originalSubdomain=uk",
  },
  {
    id: 4,
    name: "Facebook",
    icon: fb,
    link: "https://www.facebook.com/rebuildinglivesuk/",
  },
];
