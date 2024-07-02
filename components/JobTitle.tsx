import React from "react";
import { BanknoteIcon, MapPinIcon } from "lucide-react";

type Props = {};

const JobTitle = (props: Props) => {
  return (
    <div className="flex flex-col gap-6 pt-4 pb-8 border-b">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <h1 className="text-4xl font-semibold text-primaryText">
          Senior Product Designer
        </h1>

        <span className="text-[#D1D1D1]">&#x2022;</span>

        <p className="text-mutedText text-sm font-medium">posted 2 days ago</p>

        <div className="bg-[#ECFDF3] pl-2 pr-2.5 rounded-full text-xs font-medium border border-[#ABEFC6] flex items-center gap-1 w-fit">
          <span className="text-lg pb-1 -my-1 text-[#17B26A]">&#x2022;</span>
          <span className="text-[#067647]">Open</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 text-lg font-medium text-tertiaryText *:flex *:items-center *:gap-1.5">
        <div>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
              stroke="#5D5D5D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 22.5C16 18.5 20 14.9183 20 10.5C20 6.08172 16.4183 2.5 12 2.5C7.58172 2.5 4 6.08172 4 10.5C4 14.9183 8 18.5 12 22.5Z"
              stroke="#5D5D5D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Delaware, USA
        </div>

        <span className="text-[#D1D1D1] text-sm">&#x2022;</span>

        <div>
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3.5C12 4.60457 9.53757 5.5 6.5 5.5C3.46243 5.5 1 4.60457 1 3.5M12 3.5C12 2.39543 9.53757 1.5 6.5 1.5C3.46243 1.5 1 2.39543 1 3.5M12 3.5V5M1 3.5V15.5C1 16.6046 3.46243 17.5 6.5 17.5M6.5 9.5C6.33145 9.5 6.16468 9.49724 6 9.49185C3.19675 9.39999 1 8.54328 1 7.5M6.5 13.5C3.46243 13.5 1 12.6046 1 11.5M21 10C21 11.1046 18.5376 12 15.5 12C12.4624 12 10 11.1046 10 10M21 10C21 8.89543 18.5376 8 15.5 8C12.4624 8 10 8.89543 10 10M21 10V17.5C21 18.6046 18.5376 19.5 15.5 19.5C12.4624 19.5 10 18.6046 10 17.5V10M21 13.75C21 14.8546 18.5376 15.75 15.5 15.75C12.4624 15.75 10 14.8546 10 13.75"
              stroke="#5D5D5D"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          300k-400k
        </div>
      </div>
    </div>
  );
};

export default JobTitle;
