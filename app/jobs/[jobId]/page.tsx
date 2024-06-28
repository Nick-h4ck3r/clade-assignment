import React from "react";
import JobTabs from "@/components/JobTabs";

type Props = {};

const JobPage = (props: Props) => {
  return (
    <>
      <div className="border">
        <JobTabs />
      </div>
      <div className="flex px-16 text-sm">
        <div className="flex flex-col bg-white w-3/4 border-r py-4">hj</div>
        <div className="flex flex-col bg-white w-1/4 px-4 py-4">qwe</div>
      </div>
    </>
  );
};

export default JobPage;
