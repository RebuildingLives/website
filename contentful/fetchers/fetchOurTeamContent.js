import contentfulClient from "../contentfulClient";
import { parseContentfulContentImage } from "../contentImage";

export function parseContentfulTeamMember(TeamMember) {
  if (!TeamMember) {
    return null;
  }

  return {
    name: TeamMember.fields.name || "",
    role: TeamMember.fields.role || "",
    slug: TeamMember.fields.slug,
    description: TeamMember.fields.description || null,
    image: parseContentfulContentImage(TeamMember.fields.image),
  };
}

export const fetchTeamMembers = async ({ preview }) => {
  const contentful = contentfulClient({ preview });

  const teamMembers = await contentful.getEntries({
    content_type: "teamPage",
    include: 2,
    order: ["fields.role"],
  });

  return teamMembers.items.map(teamMember => parseContentfulTeamMember(teamMember));
};

export const fetchTeamMember = async ({ slug, preview }) => {
  const contentful = contentfulClient({ preview });

  const teamMembersResult = await contentful.getEntries({
    content_type: "teamPage",
    "fields.slug": slug,
    include: 2,
  });

  return parseContentfulTeamMember(teamMembersResult.items[0]);
};
