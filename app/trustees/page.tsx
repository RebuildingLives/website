import PeopleSection from "@/components/our-team/OurTeam";
import RedLine from "@/components/red-line/RedLine";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Trustees | Guiding Our Mission",
  description: "Meet the dedicated individuals who serve as trustees, guiding our mission to end domestic abuse. Learn about their expertise and commitment.",
  alternates: {
    canonical: "trustees",
  },
};


const OurTeam = () => {
  return (
    <>
      <div className="mt-12 text-center">
        <h1 className="text-heading font-bold leading-none tracking-tight sm:text-4xl">
          Meet the Team
        </h1>
        <br />
        <RedLine styles="mx-auto" />
      </div>
      <PeopleSection />;
    </>
  );
};

export default OurTeam;
