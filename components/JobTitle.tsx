import React from "react";
import { BanknoteIcon, MapPinIcon } from "lucide-react";

type Props = {};

const JobTitle = (props: Props) => {
  return (
    <div className="flex flex-col gap-8 pt-4 pb-8 border-b">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <h1 className="text-4xl font-bold">Senior Product Designer</h1>
        <p className="text-gray-400 text-sm font-medium">posted 2 days ago</p>
        <div className="bg-green-100 pl-2 pr-2.5 rounded-full text-xs font-bold text-green-600 border border-green-600 flex items-center gap-1.5 w-fit">
          <span className="text-xl">&#x2022;</span>
          <span>Open</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 text-base font-semibold text-gray-500 *:flex *:items-center *:gap-1.5">
        <div>
          <MapPinIcon className="size-[18px]" />
          Delaware, USA
        </div>
        <div>
          <BanknoteIcon className="size-5" />
          300k-400k
        </div>
      </div>
    </div>
  );
};

export default JobTitle;
