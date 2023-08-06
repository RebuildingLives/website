import React from "react";
import RedLine from "../red-line/RedLine";
import Link from "next/link";

export default function Section1() {
  return (
    <section className="px-4 md:py-18 mx-auto max-w-7xl">
      <h2 className="mb-6 text-heading2 text-center">How you can help</h2>
      <br />
      <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h3 className="text-heading3 text-center sm:text-left">
            Building Hope: Ways to Help Victims of Domestic Violence
          </h3>
          <RedLine styles="my-4 sm:my-2 sm:mx-0 mx-auto h-[3px] sm:h-2" />
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Discover how to build hope and help domestic violence victims. Be a beacon of hope,
            providing support and resources to break free from abuse. Join us in creating a brighter
            future for those affected by domestic violence. Together, we make a difference.
          </p>

          <Link
            className="my-4 underline font-bold flex justify-start items-center"
            href={`/latest-news-and-media`}>
            <span>Read more</span>
            <svg
              className="mt-[6px]"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 16 16"
              id="chevron-right">
              <path
                fill="#212121"
                d="M7.14645,3.89645 C6.95118,4.09171 6.95118,4.40829 7.14645,4.60355 L10.2929,7.7499975 L7.14645,10.8964 C6.95118,11.0917 6.95118,11.4083 7.14645,11.6036 C7.34171,11.7988 7.65829,11.7988 7.85355,11.6036 L11.3536,8.10355 C11.5488,7.90829 11.5488,7.59171 11.3536,7.39645 L7.85355,3.89645 C7.65829,3.70118 7.34171,3.70118 7.14645,3.89645 Z"></path>
            </svg>
          </Link>
        </div>
        {/* // image */}
        <div className="w-full h-full py-48 bg-gray-200" />
      </div>
      <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="order-none md:order-2">
          <h3 className="text-heading3 text-center sm:text-left">
            Together We Heal: Your Role in Assisting Domestic Violence Survivors
          </h3>
          <RedLine styles="my-4 sm:my-2 sm:mx-0 mx-auto h-[3px] sm:h-2" />

          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Join us in empowering and supporting those affected by domestic abuse to rebuild their
            lives and find hope amidst adversity. Together, we can break the cycle of violence and
            create a brighter, safer future for survivors. Be part of our compassionate community,
            making a lasting impact on their journey to healing and recovery.
          </p>
          <Link
            className="my-4 underline font-bold flex justify-start items-center"
            href={`/latest-news-and-media`}>
            <span>Read more</span>
            <svg
              className="mt-[6px]"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 16 16"
              id="chevron-right">
              <path
                fill="#212121"
                d="M7.14645,3.89645 C6.95118,4.09171 6.95118,4.40829 7.14645,4.60355 L10.2929,7.7499975 L7.14645,10.8964 C6.95118,11.0917 6.95118,11.4083 7.14645,11.6036 C7.34171,11.7988 7.65829,11.7988 7.85355,11.6036 L11.3536,8.10355 C11.5488,7.90829 11.5488,7.59171 11.3536,7.39645 L7.85355,3.89645 C7.65829,3.70118 7.34171,3.70118 7.14645,3.89645 Z"></path>
            </svg>
          </Link>
        </div>
        {/* // image */}

        <div className="w-full h-full py-48 bg-gray-200" />
      </div>
    </section>
  );
}
