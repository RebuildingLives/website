import React from "react";
import aboutUsBanner from "@/public/images/about-us-banner.webp";
import SubPage from "@/components/sub-page/SubPage";
import Article from "@/components/article/Article";

import { data } from "./data";
import Image from "next/image";

const OurVision = () => {
  return (
    <SubPage image={aboutUsBanner} heading="Vision and Mission Statement">
      <Article>
        <br />
        <h2 className="text-heading2 text-center">What we stand for</h2>
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
        <ul>
          {data.map(({ title, icon }, index) => (
            <li className="flex items-center font-medium text-lg" key={index}>
              <Image src={icon.src} alt={title} width={75} height={75} />
              {title}
            </li>
          ))}
        </ul>
      </Article>
    </SubPage>
  );
};

export default OurVision;
