"use client";

import Link from "next/link";

export default function FAQ({ menuContent, setIsOpen, id, activeTab, onSetActiveTab }) {
  return (
    <details
      onClick={e => {
        e.preventDefault();
        onSetActiveTab(id);
      }}
      className="group rounded-lg bg-gray-50 p-6"
      open={activeTab}>
      <summary className="flex cursor-pointer items-center justify-between gap-1.5">
        <h2 className="text-2xl text-primary-clr font-medium">{menuContent.heading}</h2>

        <span className="relative h-5 w-5 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </summary>

      <ul className="mt-4 text-lg">
        {menuContent.links.map(link => {
          return (
            <li className="my-2" key={link.id}>
              <Link onClick={() => setIsOpen(false)} href={link.path}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
