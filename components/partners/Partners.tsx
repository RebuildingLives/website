import Image from "next/image";
import React from "react";
import logo1 from "@/public/images/logos/image003.webp";
import logo2 from "@/public/images/logos/image004.webp";
import logo3 from "@/public/images/logos/image005.webp";
import logo4 from "@/public/images/logos/image006.webp";
import logo5 from "@/public/images/logos/image007.webp";
import Marquee from "react-fast-marquee";

const logos = [logo1, logo2, logo3, logo4, logo5];

const Partners = () => {
  return (
    <section>
      <div className="relative mb-4 items-center w-full py-12 mx-auto max-w-7xl">
        <h2 className="text-heading2 text-center">Our partners</h2>

        <div className="mx-auto hidden md:block">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-8">
            {logos.map((logo, index) => (
              <div key={index} className="px-8">
                <Image
                  width={logo.width}
                  height={logo.height}
                  placeholder="blur"
                  blurDataURL={logo.blurDataURL}
                  className="w-full"
                  src={logo.src}
                  alt={`logo-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="md:hidden">
          <Marquee autoFill={true} className="flex justify-center items-center mt-8 md:mt-24" speed={20}>
            {logos.map((logo, index) => (
              <div key={index} className="px-8">
                <Image
                  width={200}
                  height={logo.height}
                  placeholder="blur"
                  blurDataURL={logo.blurDataURL}
                  className="w-full object-cover"
                  src={logo.src}
                  alt={`logo-${index}`}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Partners;
