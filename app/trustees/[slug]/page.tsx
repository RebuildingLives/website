import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import {
  fetchTeamMember,
  fetchTeamMembers,
} from "../../../contentful/fetchers/fetchOurTeamContent";
import Link from "next/link";
import RichText from "../../../contentful/RichText";
import { Metadata } from "next";
import { options } from "@/contentful/helpers";

export async function generateStaticParams() {
  const teamMembers = await fetchTeamMembers({ preview: false });

  return teamMembers.map(teamMember => ({ slug: teamMember?.slug }));
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const teamMember = await fetchTeamMember({ slug: params.slug, preview: draftMode().isEnabled });

  if (!teamMember) {
    return notFound();
  }

  const { name } = teamMember;

  return {
    title: `${name} | Our Trustee`,
    description: `Learn about ${name}, one of our dedicated trustees guiding our mission to end domestic abuse.`,
    alternates: {
      canonical: `/trustees/${params.slug}`,
    },
  };
}

async function TeamMemberPage({ params }: Props) {
  const teamMember = await fetchTeamMember({
    slug: params.slug,
    preview: draftMode().isEnabled,
  });

  if (!teamMember) {
    // If a blog post can't be found,
    // tell Next.js to render a 404 page.
    return notFound();
  }

  return (
    <main>
      <div className="py-12 px-4 max-w-7xl mx-auto space-y-4 flex justify-center items-center flex-wrap lg:flex-nowrap gap-12">
        {teamMember.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="mx-auto flex-grow"
            src={teamMember.image.src}
            // responsive images. No next/image required:
            srcSet={`${teamMember.image.src}?w=500 1x, ${teamMember.image.src} 2x`}
            alt={teamMember.image.alt}
          />
        )}
        <div>
          <h1 className="text-heading2 text-center">{teamMember.name}</h1>

          <RichText document={teamMember.description} options={options} />
          <br />
          <Link className="text-primary-clr" href="/trustees">
            ← Go back
          </Link>
        </div>
      </div>
    </main>
  );
}

export default TeamMemberPage;
