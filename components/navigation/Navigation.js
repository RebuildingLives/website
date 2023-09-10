"use client";

import Link from "next/link";
import Hamburger from "./mobile/Hamburger";
import logo from "@/public/images/RLlogo.webp";
import Image from "next/image";
import DropDown from "./DropDown";
import { navLinks, aboutLinks, ourTeamLinks } from "@/components/navigation/links";

const commonStyles = "relative flex items-center justify-between xl:text-lg md:px-7";

export default function Navigation() {
  return (
    <header className="h-[80px] lg:h-[100px] flex justify-center items-center z-50 w-full bg-white text-md lg:py-3 py-1 md:py-0">
      <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link className="h-[80px] lg:h-[100px]" href="/">
            <Image
              className="w-full h-full p-2"
              src={logo}
              width={80}
              height={100}
              alt="RBLUK logo"
            />
          </Link>

          <ul className="hidden lg:flex justify-between items-center">
            <DropDown title="About us" links={aboutLinks} />
            <DropDown title="Our team" links={ourTeamLinks} />
            {navLinks.map(({ id, name, path }) => {
              return (
                <li key={id} className={`hover:text-primary-clr ${commonStyles}`}>
                  <Link href={path}>{name}</Link>
                </li>
              );
            })}
          </ul>
          <Hamburger />
        </div>
      </nav>
    </header>
  );
}
