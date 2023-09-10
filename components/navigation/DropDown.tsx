"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import DropdownIcon from "./DropdownIcon";
import { useClickAway } from "@uidotdev/usehooks";

const commonStyles = "w-full relative flex gap-4 items-center justify-between xl:text-lg md:px-7";

interface LinksProps {
  id: number;
  name: string;
  path: string;
  icon: StaticImageData;
}

type DropDownProps = {
  links: LinksProps[];
  title: string;
};

const DropDown = ({ links, title }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center items-center p-2 xl:text-lg">
        {title}
        <DropdownIcon isOpen={isOpen} />
      </button>

      {isOpen && (
        <ul
          // @ts-ignore
          ref={ref}
          className="origin-top-right absolute right-0 mt-2 w-60 rounded-md bg-white z-30 py-3 shadow-md shadow-primary-clr"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu">
          {links.map(({ id, name, path, icon }) => {
            return (
              <li key={id} className={`hover:text-primary-clr ${commonStyles}`}>
                <Link href={path}>{name}</Link>
                <br />
                <Image priority src={icon} width={45} height={45} alt="link icon" />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
