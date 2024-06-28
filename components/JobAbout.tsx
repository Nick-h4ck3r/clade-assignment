import React from "react";

type Props = {};

const JobAbout = (props: Props) => {
  return (
    <div className="border-b-2 py-6 flex flex-col gap-3">
      <p className="text-xs font-medium text-gray-600">About the job</p>
      <p className="font-medium leading-7">
        1. Handle the UI/UX research design <br /> 2. Work on researching on
        latest web applications designs & trends <br /> 3. Work on
        conceptualizing and visualizing <br /> 4. Work on creating graphics
        content and other graphic related works
        <br /> Benefits: <br /> &nbsp; &#x2022; Health insurance <br /> &nbsp;
        &#x2022; Provident Fund
        <br /> Schedule: <br /> &nbsp; &#x2022; Day shift
        <br /> Supplemental pay types: <br /> &nbsp; &#x2022; Performance bonus{" "}
        <br /> &nbsp; &#x2022; Yearly bonus
        <br /> Work Location:  In person
      </p>
    </div>
  );
};

export default JobAbout;
