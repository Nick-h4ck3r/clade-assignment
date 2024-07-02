import Image from "next/image";
import React from "react";
import SmHeading from "./SmHeading";

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
        <p className="text-xl font-medium text-quaternaryText">Atlassian</p>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-5 *:gap-2">
          <div className="flex flex-col">
            <SmHeading heading="Company Size" />
            <p className="font-medium text-base text-primaryText">
              1k - 2k Employees
            </p>
          </div>

          <div className="flex flex-col">
            <SmHeading heading="Sector" />
            <p className="font-medium text-base text-primaryText">
              Information Technology, Infrastructure
            </p>
          </div>

          <div className="flex flex-col">
            <SmHeading heading="Founded in" />
            <p className="font-medium text-base text-primaryText">2019</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 *:gap-2">
          <div className="flex flex-col">
            <SmHeading heading="Type" />
            <p className="font-medium text-base text-primaryText">Private</p>
          </div>

          <div className="flex flex-col">
            <SmHeading heading="Funding" />
            <p className="font-medium text-base text-primaryText">
              Bootstrapped
            </p>
          </div>

          <div className="flex flex-col">
            <SmHeading heading="Founded by" />
            <p className="font-medium text-base text-primaryText">
              Scott Farquhar, Mike Cannon-Brookes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
