/* eslint-disable @next/next/no-img-element */
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { PersonCard, TeamMember } from "./TeamMember";
import { fetchTeamMembers } from "@/contentful/fetchers/fetchOurTeamContent";

const PeopleSection = async () => {
  const teamMembers = await fetchTeamMembers({ preview: draftMode().isEnabled });

  if (!teamMembers) {
    return notFound();
  }

  return (
    <section className="items-center w-full px-5 mx-auto md:px-12 max-w-7xl my-12">
      <br />
      <ul
        role="list"
        className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-24 sm:space-y-0 lg:grid-cols-3 lg:gap-x-12">
        {teamMembers.map((teamMember, index) => (
          <PersonCard key={index} teamMember={teamMember as TeamMember} />
        ))}
      </ul>
    </section>
  );
};

export default PeopleSection;
