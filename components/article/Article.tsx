import React from "react";

const Article = ({ children }: { children: React.ReactNode }) => {
  return <article className="space-y-8 max-w-readable mx-auto indent-2 px-4">{children}</article>;
};

export default Article;
