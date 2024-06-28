import Image from "next/image";
import React from "react";

type Props = {};

const CompanyDetails = (props: Props) => {
  return (
    <div className="w-3/4 border-b py-6">
      <div className="pb-6 flex gap-4 items-center">
        <Image
          src={"/atlassian.png"}
          className="rounded-sm"
          alt="logo"
          width={40}
          height={40}
        />
        <p className="text-lg font-medium">Atlassian</p>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-5 *:gap-2">
          <div className="flex flex-col">
            <p className="text-xs font-medium text-gray-600">Company size</p>
            <p className="font-medium">1k - 2k Employees</p>
          </div>

          <div className="flex flex-col">
            <p className="text-xs font-medium text-gray-600">Sector</p>
            <p className="font-medium">
              Information Technology, Infrastructure
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-xs font-medium text-gray-600">Founded In</p>
            <p className="font-medium">2019</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 *:gap-2">
          <div className="flex flex-col">
            <p className="text-xs font-medium text-gray-600">Type</p>
            <p className="font-medium">Private</p>
          </div>

          <div className="flex flex-col">
            <p className="text-xs font-medium text-gray-600">Funding</p>
            <p className="font-medium">Bootstrapped</p>
          </div>

          <div className="flex flex-col">
            <p className="text-xs font-medium text-gray-600">Founded By</p>
            <p className="font-medium">Scott Farquhar, Mike Cannon-Brookes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
