import React from "react";
import { navLinks, socialMediaLinks } from "./footer-data";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/RLlogo.webp";
import Newsletter from "./Newsletter";

const currentDate = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-white mt-12">
      <div className="bg-accent-clr py-8">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <div className="mb-3 text-center md:mb-0 md:text-left">
              <span className="font-bold uppercase tracking-widest text-gray-100">Newsletter</span>
              <p className="text-indigo-200">Subscribe to our newsletter</p>
              <small>
                <Link href="/tc">T&C applies</Link>
              </small>
            </div>
            <Newsletter />
          </div>
        </div>
      </div>
      <div className="pt-12 lg:pt-16">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
            <div className="col-span-full lg:col-span-2">
              <div className="mb-4 lg:-mt-2">
                <Link href="/">
                  <Image
                    className="mt-2 lg:my-0 p-2 mx-auto lg:mx-0"
                    src={logo}
                    width={170}
                    height={100}
                    alt="RBLUK logo"
                  />
                </Link>
              </div>
              <p className="mb-6 text-gray-500 sm:pr-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi dolorum
                incidunt sunt impedit repellendus est praesentium in voluptatibus aperiam?
              </p>
              <div className="flex gap-4">
                {socialMediaLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    className=" transition duration-100">
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            {navLinks.map((navItem, index) => (
              <div key={index}>
                <div className="mb-4 font-bold uppercase tracking-widest ">{navItem.title}</div>
                <nav className="flex flex-col gap-4">
                  {navItem.links.map((link, index) => (
                    <div key={index}>
                      <a href={link.url} className=" transition duration-100">
                        {link.label}
                      </a>
                    </div>
                  ))}
                </nav>
              </div>
            ))}
          </div>
          <div className="border-t py-8 text-center text-sm ">
            © {currentDate} - Rebuilding lives. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
