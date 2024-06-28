"use client";

import React from "react";

type Props = {};

const JobTabs = (props: Props) => {
  const [tab, setTab] = React.useState("jobPreview");

  return (
    <div className="flex px-16 *:py-4 *:cursor-pointer *:border-b-2 *:duration-300 gap-20 text-sm overflow-y-scroll md:overflow-hidden">
      <div
        onClick={() => setTab("jobPreview")}
        className={`${
          tab == "jobPreview"
            ? "border-orange-600 text-orange-600 font-semibold"
            : "border-transparent text-gray-400"
        }`}
      >
        Job Preview
      </div>
      <div
        onClick={() => setTab("applicants")}
        className={`${
          tab == "applicants"
            ? "border-orange-600 text-orange-600 font-semibold"
            : "border-transparent text-gray-400"
        }`}
      >
        Applicants
      </div>
      <div
        onClick={() => setTab("match")}
        className={`${
          tab == "match"
            ? "border-orange-600 text-orange-600 font-semibold"
            : "border-transparent text-gray-400"
        }`}
      >
        Match
      </div>
      <div
        onClick={() => setTab("messages")}
        className={`${
          tab == "messages"
            ? "border-orange-600 text-orange-600 font-semibold"
            : "border-transparent text-gray-400"
        }`}
      >
        Messages
      </div>
    </div>
  );
};

export default JobTabs;
