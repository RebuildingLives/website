"use client";

import Image from "next/image";
import React, { useState } from "react";
import lineLeft from "@/public/icons/line-left.svg";
import lineRight from "@/public/icons/line-right.svg";
import Link from "next/link";
import { listItems, listItems2 } from "./data";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative">
      <div>
        <div className="flex justify-around p-2">
          <button onClick={() => setActiveTab(0)}>
            <h3 className="md:text-heading3">Fundraising Challenges</h3>
          </button>
          <button onClick={() => setActiveTab(1)}>
            <h3 className="md:text-heading3">How we use funds</h3>
          </button>
        </div>
        <br />
        {activeTab === 0 ? (
          <div className="p-4">
            <ul className="space-y-4">
              {listItems.map((item, index) => {
                return (
                  <li className="flex items-center gap-4" key={index}>
                    <span>{item.icon}</span>
                    {item.text}
                  </li>
                );
              })}
            </ul>
            <br />
            <p>
              If the answer to any or all of these questions is YES, we invite you to book your
              place at the UK’s most popular, inspiring, edge-of- the-seat, electrifying charity
              challenge events and fundraise for our cause.
            </p>
            <br />
            <br />
            <div className="w-full flex justify-evenly gap-4 lg:gap-8">
              <Link className={btnStyles} href="/">
                Try a charity skydive
              </Link>
              <Link className={btnStyles} href="/">
                Tough Mudder
              </Link>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <ul className="space-y-8">
              {listItems2.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="flex items-center justify-center md:justify-start gap-8">
                      <span>{item.icon}</span>
                      <h3 className="text-heading">{item.heading}</h3>
                    </div>

                    <p>{item.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <Image
        className="absolute top-[3rem] right-0 w-full"
        src={activeTab === 0 ? lineLeft : lineRight}
        alt="red line"
        width={700}
        height={10}
      />
    </div>
  );
};

export default Tabs;

const btnStyles =
  "text-sm bg-primary-clr text-white text-center hover:bg-white hover:text-primary-clr active:text-primary-clr rounded px-2 py-1 lg:px-8 lg:py-3 font-medium shadow hover:shadow-lg focus:outline-dashed focus:ring focus:ring-white sm:w-auto";
