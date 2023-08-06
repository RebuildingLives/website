"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/images/RLlogo.webp";
import FAQ from "./FAQ";
import { dropDownLinksAboutUs, dropDownLinksOurTeam } from "@/components/navigation/Dropdown";
import SocialMediaLinks from "@/components/social-media-links/SocialMediaLinks";

const menuItems = [
  {
    id: 1,
    heading: "About us",
    links: dropDownLinksAboutUs,
  },
  {
    id: 2,
    heading: "Our team",
    links: dropDownLinksOurTeam,
  },
  {
    id: 3,
    heading: "Survivor stories",
    links: [{ id: 1, name: "individual story here", path: "/survivor-stories" }],
  },
  {
    id: 4,
    heading: "Support us",
    links: [{ id: 1, name: "Donate", path: "/donate" }],
  },
];

export default function Menu({ isOpen, setIsOpen }) {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const transition = isOpen ? "opacity-100" : "opacity-0 ";
  return (
    <>
      <div
        aria-label="navigation"
        className={`fixed inset-0 z-40 w-full bg-white ${transition} ease [transition:opacity_700ms,visibility_700ms] border-2 border-primary-clr overflow-y-scroll`}
        aria-hidden={!isOpen}
        close="true">
        <Image
          className="mx-auto mt-4 lg:my-0"
          src={logo}
          width={100}
          height={100}
          alt="Rebuilding lives logo"
        />
        <nav id="menuItems" aria-label="navigation" className="relative z-20 h-full w-full text-md">
          <hr className="mx-auto w-3/4 my-8" />

          <div className="space-y-4">
            {menuItems.map(menuItem => {
              return (
                <FAQ
                  key={menuItem.id}
                  id={menuItem.id}
                  activeTab={activeTab === menuItem.id}
                  onSetActiveTab={setActiveTab}
                  menuContent={menuItem}
                  setIsOpen={setIsOpen}
                />
              );
            })}
          </div>
          <hr className="mx-auto w-3/4 mt-12 border-gray-900" />

          <SocialMediaLinks />
        </nav>
      </div>
    </>
  );
}
