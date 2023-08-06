import Image from "next/image";
import logo from "@/public/images/RLlogo.webp";
import FAQ from "./FAQ";
import { dropDownLinksAboutUs, dropDownLinksOurTeam } from "@/components/navigation/Dropdown";

const menuItems = [
  {
    id: 1,
    heading: "About us",
    links: dropDownLinksAboutUs,
  },
  {
    id: 2,
    heading: "Our team",
    links: dropDownLinksOurTeam,
  },
  {
    id: 3,
    heading: "Survivor stories",
    links: [{ id: 1, name: "individual story here", path: "/survivor-stories" }],
  },
  {
    id: 3,
    heading: "Support us",
    links: [{ id: 1, name: "Donate", path: "/donate" }],
  },
];

export default function Menu({ isOpen, setIsOpen }) {
  const transition = isOpen ? "opacity-100" : "opacity-0 ";
  return (
    <>
      <div
        aria-label="navigation"
        className={`fixed inset-0 z-40 w-full bg-white ${transition} ease [transition:opacity_700ms,visibility_700ms] border-2 border-primary-clr`}
        aria-hidden={!isOpen}
        close="true">
        <Image
          className="mx-auto mt-4 lg:my-0"
          src={logo}
          width={180}
          height={190}
          alt="RBLUK logo"
        />
        <nav id="menuItems" aria-label="navigation" className="relative z-20 h-full w-full text-md">
          {/* loop */}
          <hr className="mx-auto w-3/4 my-8 border-gray-900" />

          {/* FAQ */}
          <div className="space-y-4">
            {menuItems.map(menuItem => {
              return <FAQ key={menuItem.id} menuContent={menuItem} setIsOpen={setIsOpen} />;
            })}
          </div>
          <hr className="mx-auto w-3/4 mt-12 border-gray-900" />

          {/* SOCIAL MEDIA */}

          <ul className="mt-2 items-center gap-4 flex justify-center">
            <li>
              <span className="sr-only">F</span>
              <a rel="noopener" target="_blank" href="">
                social media icon
              </a>
            </li>
            <li>
              <span className="sr-only">F</span>
              <a rel="noopener" target="_blank" href="">
                social media icon
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && (
        <button
          className="fixed bottom-4 left-1/2 -translate-x-1/2 -translate-y-1/2 transform z-40 bg-primary-clr text-white uppercase px-4 py-2"
          type="button"
          onClick={() => setIsOpen(false)}>
          close
          <span className="sr-only">Close Mobile Menu</span>
        </button>
      )}
    </>
  );
}
