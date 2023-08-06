import React from "react";
import Link from "next/link";
import Image from "next/image";

export const dropDownLinksAboutUs = [
  { id: 1, name: "Vision/mission", path: "/mission", icon: "/icons/NCDVlogo.svg" },
  { id: 2, name: "Referrals", path: "/referrals", icon: "/icons/handshake.svg" },
];

export const dropDownLinksOurTeam = [
  { id: 1, name: "Trustees", path: "/trustees", icon: "/icons/love.svg" },
  { id: 2, name: "Volunteers", path: "/volunteers", icon: "/icons/friends.svg" },
];

let links;

export default function Dropdown({ id, itemProps }) {
  if (id === 1) {
    links = dropDownLinksAboutUs;
  } else {
    links = dropDownLinksOurTeam;
  }

  return (
    <div
      className="absolute top-[3.5rem] left-[-2rem] w-56 z-30 bg-white flex flex-col gap-4 justify-center items-start p-4 rounded-md shadow-md shadow-primary-clr"
      role="menu">
      {links.map(({ id, name, icon, path }) => {
        return (
          <Link
            key={id}
            {...itemProps[id - 1]}
            href={path}
            className="flex justify-between items-center gap-4 hover:text-primary-clr font-bold">
            <Image src={icon} width={45} height={45} alt="link icon" />
            {name}
          </Link>
        );
      })}
    </div>
  );
}
