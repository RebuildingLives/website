"use client";

import { useState } from "react";
import jsonp from "jsonp";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    // ENV !!

    const url = "your-mailchimp-url";

    // ENV !!
    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      const { msg, result } = data;

      // do something with response
      // modal here
    });

    setEmail("");
  };

  return (
    <form
      method="post"
      // action="/"
      autoComplete="off"
      onSubmit={onSubmit}
      className="flex w-full gap-2 md:max-w-md">
      <input
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        value={email}
        name="EMAIL"
        className="w-full flex-1 rounded border border-white px-3 py-2placeholder-indigo-100 outline-none transition duration-100 focus:ring"
        id="mce-EMAIL"
        required
      />

      <button className="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold outline-none transition duration-100 hover:bg-gray-100 focus-visible:ring  md:text-base">
        Send
      </button>
    </form>
  );
};

export default Newsletter;
