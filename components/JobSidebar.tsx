import {
  EyeIcon,
  MessageSquareIcon,
  PenIcon,
  TrashIcon,
  UserRoundCheckIcon,
  UsersRoundIcon,
} from "lucide-react";
import { Button } from "./ui/button";

type Props = {};

const JobSidebar = (props: Props) => {
  return (
    <div className="flex flex-col text-base max-w-xs md:max-w-sm lg:max-w-none">
      <div className="flex items-center w-full gap-4">
        <Button
          variant={"outline"}
          className="w-full gap-2 bg-accentSecondary flex items-center"
        >
          <TrashIcon className="size-4" />
          <span className="font-medium text-base">Delete Job</span>
        </Button>

        <Button className="w-full gap-2">
          <PenIcon className="inline-flex size-4" />
          <span className="font-medium text-base">Edit Job</span>
        </Button>
      </div>

      <div className="p-3 *:py-6 *:px-2 *:flex *:items-center *:justify-between *:border-b">
        <div className="">
          <span className="font-medium text-quaternaryText text-base">
            <UsersRoundIcon className="inline-flex size-5 mr-2" /> Applicants
          </span>
          <span className="font-semibold text-xl">400</span>
        </div>

        <div className="">
          <span className="font-medium text-quaternaryText text-base">
            <UserRoundCheckIcon className="inline-flex size-5 mr-2" /> Matches
          </span>
          <span className="font-semibold text-xl">100</span>
        </div>

        <div className="">
          <span className="font-medium text-quaternaryText text-base">
            <MessageSquareIcon className="inline-flex size-5 mr-2" />
            Messages
          </span>
          <span className="font-semibold text-xl">147</span>
        </div>

        <div className="">
          <span className="font-medium text-quaternaryText text-base">
            <EyeIcon className="inline-flex size-5 mr-2" />
            Views
          </span>
          <span className="font-semibold text-xl">800</span>
        </div>
      </div>
    </div>
  );
};

export default JobSidebar;
