import React from "react";

type Props = {};

const JobDetails = (props: Props) => {
  return (
    <div className="border-b-2">
      <div className="grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-4 py-6 w-fit *:border-gray-300 *:text-sm *:pr-10 *:flex *:flex-col *:gap-3">
        <div>
          <p className="text-xs font-medium text-gray-600">Skills Required</p>
          <div className="flex flex-col gap-2">
            <p className="text-xs border w-fit p-1.5 rounded-md">Figma</p>
            <p className="text-xs border w-fit p-1.5 rounded-md">
              Adobe Illustrator
            </p>
            <p className="text-xs border w-fit p-1.5 rounded-md">Adobe XD</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-gray-600">
            Preferred Language
          </p>
          <p className="font-bold text-base">English</p>
        </div>
        <div>
          <p className="text-xs font-medium text-gray-600">Type</p>
          <p className="font-bold text-base">Full-time</p>
        </div>
        <div>
          <p className="text-xs font-medium text-gray-600">
            Years of Experience
          </p>
          <p className="font-bold text-base">3+ Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
