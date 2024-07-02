"use client";

import React from "react";

type Props = {};

const JobTabs = (props: Props) => {
  const [tab, setTab] = React.useState("jobPreview");

  return (
    <div className="flex px-16 *:py-3 *:cursor-pointer *:border-b-2 *:duration-300 gap-20 text-lg overflow-y-scroll md:overflow-hidden font-medium">
      <div
        onClick={() => setTab("jobPreview")}
        className={`${
          tab == "jobPreview"
            ? "border-accentPrimary text-accentPrimary font-semibold"
            : "border-transparent text-mutedText"
        }`}
      >
        Job Preview
      </div>
      <div
        onClick={() => setTab("applicants")}
        className={`${
          tab == "applicants"
            ? "border-accentPrimary text-accentPrimary font-semibold"
            : "border-transparent text-mutedText"
        }`}
      >
        Applicants
      </div>
      <div
        onClick={() => setTab("match")}
        className={`${
          tab == "match"
            ? "border-accentPrimary text-accentPrimary font-semibold"
            : "border-transparent text-mutedText"
        }`}
      >
        Match
      </div>
      <div
        onClick={() => setTab("messages")}
        className={`${
          tab == "messages"
            ? "border-accentPrimary text-accentPrimary font-semibold"
            : "border-transparent text-mutedText"
        }`}
      >
        Messages
      </div>
    </div>
  );
};

export default JobTabs;
