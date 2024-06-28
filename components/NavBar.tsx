import {
  BellIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  HandCoinsIcon,
  MessageSquareIcon,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="">
      <div className="flex justify-between items-center bg-white px-10 py-4 mx-auto">
        <div className="bg-gray-200 px-5 py-3 font-semibold text-orange-600">
          Logo
        </div>

        <div
          className={`flex p-2 border border-gray-200 rounded-full gap-6 *:py-2 *:px-3 *:rounded-full *:flex *:items-center *:gap-2 cursor-pointer`}
        >
          <Link
            href={"/jobs"}
            className="bg-orange-600 text-white border-2 border-orange-300"
          >
            <BriefcaseIcon className="size-5" /> <span>Jobs</span>
          </Link>
          <div className="text-gray-400">
            <MessageSquareIcon className="size-5" /> <span>Messages</span>
          </div>
          <div className="text-gray-400">
            <HandCoinsIcon className="size-5" /> <span>Payments</span>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <BellIcon />
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 duration-300 rounded-3xl p-2">
                  <img
                    className="size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                  />
                  <ChevronDownIcon className="size-5" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
