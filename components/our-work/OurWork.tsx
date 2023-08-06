import React from "react";
import Tabs from "./Tabs";
import Link from "next/link";

const OurWork = () => {
  return (
    <section className="px-4 py-12 lg:py-24 lg:mt-24 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 ">
        <article>
          <h2 className="text-heading2 text-center lg:text-left">ETHICAL USE OF FUNDS</h2>
          <br />
          <p>
            As a charity organization, we are proud to emphasize that the majority of the funds we
            raise go directly to support survivors. It brings us immense joy and satisfaction to
            know that a significant portion of the donations and funds we receive are used to
            provide direct assistance and support to individuals who have experienced hardship or
            adversity.
          </p>
          <br />
          <p>
            We understand the importance of transparency, and we make every effort to be clear about
            how the funds are used. It is our commitment to you, our valued donors and supporters,
            to provide detailed information about our financial practices and how each penny is
            allocated to different initiatives and programs aimed at helping those in need.
          </p>
          <br />
          <br />
          <Link href="/???" className={btnStyles}>
            Learn more about what we do
          </Link>
        </article>
        <Tabs />
      </div>
    </section>
  );
};

export default OurWork;

const btnStyles =
  "block w-fit mx-auto mt-8 rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow-xl active:translate-y-2 transition-transform duration-200 active:text-primary border-2 border-secondary-clr hover:bg-primary-clr hover:text-white hover:border-primary-clr mb-4";
