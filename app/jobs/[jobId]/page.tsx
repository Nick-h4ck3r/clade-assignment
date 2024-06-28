import React from "react";
import JobTabs from "@/components/JobTabs";
import JobTitle from "@/components/JobTitle";
import JobDetails from "@/components/JobDetails";
import JobAbout from "@/components/JobAbout";
import CompanyDetails from "@/components/CompanyDetails";
import JobSidebar from "@/components/JobSidebar";

type Props = {};

const JobPage = (props: Props) => {
  return (
    <>
      <div className="border">
        <JobTabs />
      </div>

      <div className="flex pl-16 text-sm">
        <div className="flex flex-col bg-white w-3/4 border-r py-4">
          <JobTitle />
          <JobDetails />
          <JobAbout />
          <CompanyDetails />
        </div>

        <div className="flex flex-col bg-white w-1/4 px-5 py-6">
          <JobSidebar />
        </div>
      </div>
    </>
  );
};

export default JobPage;
