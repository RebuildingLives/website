/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export interface TeamMember {
  name: string;
  role?: string;
  image: {
    src: string;
    alt: string;
  };
  description?: any;
  slug: string;
}

interface TeamMemberProps {
  teamMember: TeamMember;
}

export const PersonCard = ({ teamMember }: TeamMemberProps) => {
  return (
    <li className="relative before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b-2 before:border-primary-clr before:border-r-2 before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t-2 after:border-primary-clr after:border-l-2 after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]">
      <div className="w-full h-96 overflow-hidden rounded-t-lg">
        <img
          className="object-cover object-center w-full h-full"
          src={teamMember?.image?.src}
          // responsive images. No next/image required:
          srcSet={`${teamMember?.image?.src}?w=300 1x, ${teamMember?.image?.src} 2x`}
          width={300}
          height={300}
          alt={teamMember?.image?.alt}
        />
      </div>

      <div className="relative p-6 space-y-2 z-50">
        <h3 className="text-heading3 font-medium">{teamMember?.name}</h3>
        <p className="text-base text-secondary-clr">{teamMember?.role || ""}</p>

        <p className="whitespace-nowrap overflow-hidden overflow-ellipsis mt-2">
          {teamMember.description?.content[0].content[0].value}
        </p>
        <br />
        <Link className="underline font-medium" href={`/${teamMember?.slug}`}>
          Read more
        </Link>
      </div>
    </li>
  );
};
