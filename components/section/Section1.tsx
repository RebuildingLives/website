import React from "react";
import RedLine from "../red-line/RedLine";
import Link from "next/link";

export default function Section1() {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <h2 className="mb-6 text-heading2 text-center">How you can help</h2>

      <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div>
          <h3 className="text-heading3 text-center sm:text-left">Heading</h3>
          <RedLine styles="my-4 sm:my-2 sm:mx-0 mx-auto h-[3px] sm:h-2" />
          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus ipsum
            corporis, quis consequuntur laboriosam unde quidem ut veritatis commodi vitae fugit
            facilis? Odit nesciunt autem dicta facilis quod necessitatibus, aliquam eligendi, culpa
            sapiente eum sed sit architecto, iure doloribus sequi id pariatur. Tenetur dolor atque
            delectus, enim omnis modi!
          </p>
          <Link href="#" className="w-full btn btn-dark btn-lg sm:w-auto">
            Learn More
          </Link>
        </div>
        {/* // image */}
        <div className="w-full h-full py-48 bg-gray-200" />
      </div>
      <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
        <div className="order-none md:order-2">
          <h3 className="text-heading3 text-center sm:text-left">Heading</h3>
          <RedLine styles="my-4 sm:my-2 sm:mx-0 mx-auto h-[3px] sm:h-2" />

          <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus ipsum
            corporis, quis consequuntur laboriosam unde quidem ut veritatis commodi vitae fugit
            facilis? Odit nesciunt autem dicta facilis quod necessitatibus, aliquam eligendi, culpa
            sapiente eum sed sit architecto, iure doloribus sequi id pariatur. Tenetur dolor atque
            delectus, enim omnis modi!
          </p>
          <Link href="#" className="w-full btn btn-dark btn-lg sm:w-auto">
            Learn More
          </Link>
        </div>
        {/* // image */}

        <div className="w-full h-full py-48 bg-gray-200" />
      </div>
    </section>
  );
}
