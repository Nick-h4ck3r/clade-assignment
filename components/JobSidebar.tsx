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
    <div className="flex flex-col text-base">
      <div className="flex items-center w-full gap-4">
        <Button variant={"outline"}
          className="w-full gap-2 py-5"
        >
          <TrashIcon className="inline-flex size-4" /> Delete Job
        </Button>
        <Button className="w-full gap-2">
          <PenIcon className="inline-flex size-4" /> Edit Job
        </Button>
      </div>

      <div className="p-3 *:py-6 *:px-2 *:flex *:items-center *:justify-between *:border-b">
        <div className="">
          <span className="font-medium text-gray-600">
            <UsersRoundIcon className="inline-flex size-5 mr-2" /> Applicants
          </span>
          <span className="font-semibold">400</span>
        </div>

        <div className="">
          <span className="font-medium text-gray-600">
            <UserRoundCheckIcon className="inline-flex size-5 mr-2" /> Matches
          </span>
          <span className="font-semibold">100</span>
        </div>

        <div className="">
          <span className="font-medium text-gray-600">
            <MessageSquareIcon className="inline-flex size-5 mr-2" />
            Messages
          </span>
          <span className="font-semibold">147</span>
        </div>

        <div className="">
          <span className="font-medium text-gray-600">
            <EyeIcon className="inline-flex size-5 mr-2" />
            Views
          </span>
          <span className="font-semibold">800</span>
        </div>
      </div>
    </div>
  );
};

export default JobSidebar;
