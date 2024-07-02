import React from "react";

type SmHeadingProps = {
  heading: string;
};

const SmHeading = ({ heading }: SmHeadingProps) => {
  return <p className="text-sm font-medium text-smHeadings">{heading}</p>;
};

export default SmHeading;
