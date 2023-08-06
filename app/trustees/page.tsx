import PeopleSection from "@/components/our-team/OurTeam";
import RedLine from "@/components/red-line/RedLine";
import React from "react";

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
