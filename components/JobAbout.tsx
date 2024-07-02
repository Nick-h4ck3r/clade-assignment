import React from "react";
import SmHeading from "./SmHeading";

type Props = {};

const JobAbout = (props: Props) => {
  return (
    <div className="border-b-2 py-6 flex flex-col gap-3">
      <SmHeading heading="About the job" />

      <div className="font-medium leading-7 text-base text-primaryText">
        <ol>
          <li>1. Handle the UI/UX research design</li>
          <li>
            2. Work on researching on latest web applications designs & trends
          </li>
          <li>3. Work on conceptualizing and visualizing</li>
          <li>
            4. Work on creating graphics content and other graphic related works
          </li>
        </ol>
        Benefits:
        <ul className="list-disc pl-6">
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
        Schedule:
        <ul className="list-disc pl-6">
          <li>Day shift</li>
        </ul>
        Supplemental pay types:
        <ul className="list-disc pl-6">
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>
        Work Location: In person
      </div>
    </div>
  );
};

export default JobAbout;
