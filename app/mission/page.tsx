import React from "react";
import aboutUsBanner from "@/public/images/about-us-banner.webp";
import SubPage from "@/components/sub-page/SubPage";
import Article from "@/components/article/Article";

import { data } from "./data";
import Image from "next/image";
import RedLine from "@/components/red-line/RedLine";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission and Purpose | Ending Domestic Abuse",
  description: "Learn about our unwavering commitment to ending domestic abuse. Discover our mission, values, and the steps we're taking to create a world free from domestic violence.",
  alternates: {
    canonical: "mission",
  },
};


const OurVision = () => {
  return (
    <SubPage image={aboutUsBanner} heading="Vision and Mission Statement">
      <Article>
        <br />
        <h2 className="text-heading2 text-center">What we stand for</h2>
        <RedLine styles="mx-auto" />
        <p>
          Rebuilding Lives UK provides partial or complete funding for home repairs and maintenance
          for domestic abuse victims. As part of our safeguarding process, we use a network of
          trusted traders who have passed through an enhanced DBS check.
        </p>
        <p>
          Many survivors have not only suffered from physical violence, but their homes have also
          been ruined and they are left in financial difficulties. As a first step, we install
          security alarms, cameras, and locking devices to ensure safety and security. We focus on
          creating an inviting and relaxing environment in their home that supports their recovery.
          This can include minor repairs such as painting and furnishings and larger projects,
          including re-plastering, joinery, carpentry and brickwork.
        </p>
        <p>
          As a national service, we are available to all genders and identities in the United
          Kingdom starting at 18. With more funding and a broader network of trusted traders, we
          hope to expand our operations in the future. Our support will reach a greater number of
          survivors this way.
        </p>
        <h2 className="text-heading2 text-center">Values</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:place-items-center">
          {data.map(({ title, icon }, index) => {
            if (index < data.length - 1) {
              return (
                <li className="flex items-center font-medium text-lg" key={index}>
                  <Image src={icon.src} alt={title} width={75} height={75} />
                  {title}
                </li>
              );
            } else {
              return (
                <li className="md:col-span-2 flex items-center font-medium text-lg" key={index}>
                  <Image src={icon.src} alt={title} width={75} height={75} />
                  {title}
                </li>
              );
            }
          })}
        </ul>
      </Article>
    </SubPage>
  );
};

export default OurVision;
