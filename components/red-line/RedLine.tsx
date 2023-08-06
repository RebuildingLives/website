import React from "react";

const RedLine = ({ styles }: { styles?: string }) => {
  return <div className={`w-[4rem] h-2 bg-primary-clr ${styles}`}></div>;
};

export default RedLine;
