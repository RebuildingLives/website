import Link from "next/link";
import React from "react";
import RedLine from "../red-line/RedLine";

export default function Values() {
  return (
    <section className="px-4">
      <h2 className="text-heading font-bold text-center mt-12 md:mt-24">The principles that drive us</h2>
      <RedLine styles="mx-auto" />
      <br />
      <br />
      <div className="text-xl md:text-heading3 text-center space-y-8 py-8">
        <p>
          We believe that <strong>everyone deserves</strong> a secure, warm, relaxing and
          comfortable home environment.
        </p>
        <p>
          We are passionate about the <strong>prevention</strong> of domestic abuse and other
          associated forms of abuse.
        </p>
        <p>
          We believe survivors <strong>can rebuild their lives</strong> through empowerment and
          positive change.
        </p>
        <p>
          We support all individuals and <strong>never discriminate</strong>. We are inclusive and
          non-biased.
        </p>
        <br />
        <Link href="/mission" className={btnStyles}>
          Learn more who we are
        </Link>
      </div>
    </section>
  );
}

const btnStyles =
  "font-bold mx-auto mt-8 rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow-xl active:translate-y-2 transition-transform duration-200 active:text-primary sm:w-auto border-2 border-secondary-clr hover:bg-primary-clr hover:text-white hover:border-primary-clr disabled:bg-disabled-clr mb-4 disabled:cursor-not-allowed disabled:border-disabled-clr disabled:text-white";
