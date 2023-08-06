import { Metadata, ResolvingMetadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { fetchTeamMember, fetchTeamMembers } from "../../contentful/fetchers/fetchOurTeamContent";
import Link from "next/link";
import RichText from "../../contentful/RichText";

export async function generateStaticParams() {
  const teamMembers = await fetchTeamMembers({ preview: false });

  return teamMembers.map(teamMember => ({ slug: teamMember.slug }));
}

export async function generateMetadata({ params }) {
  const teamMember = await fetchTeamMember({ slug: params.slug, preview: draftMode().isEnabled });

  if (!teamMember) {
    return notFound();
  }

  return {
    title: teamMember.name,
  };
}

async function TeamMemberPage({ params }) {
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
    <main className="p-[6vw]">
      <Link href="/">← Posts</Link>
      <div className="prose mt-8 border-t pt-8">
        {teamMember.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={teamMember.image.src}
            // responsive images. No next/image required:
            srcSet={`${teamMember.image.src}?w=300 1x, ${teamMember.image.src} 2x`}
            width={300}
            height={300}
            alt={teamMember.image.alt}
          />
        )}

        <h1>{teamMember.name}</h1>

        <RichText document={teamMember.description} />
      </div>
    </main>
  );
}

export default TeamMemberPage;
