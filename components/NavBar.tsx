import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BellIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  HandCoinsIcon,
  MessageSquareIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white px-10 py-4 mx-auto gap-6 md:gap-0">
        <Link
          href={"/"}
          className="bg-[#E7E7E7] px-5 py-3 font-semibold text-xl text-accentPrimary"
        >
          Logo
        </Link>

        <div
          className={`flex p-2 border border-gray-200 rounded-full gap-6 *:py-2 *:px-3 *:rounded-full *:flex *:items-center *:gap-2 cursor-pointer`}
        >
          <Link
            href={"/jobs"}
            className="bg-accentPrimary text-white border-2 border-orange-300"
          >
            <BriefcaseIcon className="size-5" />{" "}
            <span className="text-xl font-medium">Jobs</span>
          </Link>
          <div className="text-[#B0B0B0]">
            <MessageSquareIcon className="size-5" />{" "}
            <span className="text-xl font-medium">Messages</span>
          </div>
          <div className="text-[#B0B0B0]">
            <HandCoinsIcon className="size-5" />{" "}
            <span className="text-xl font-medium">Payments</span>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <BellIcon className="size-8" />
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 duration-300 rounded-3xl p-2">
                  <Image
                    src={"/atlassian.png"}
                    height={40}
                    width={40}
                    className="rounded-full"
                    alt=""
                  />
                  <ChevronDownIcon className="size-5" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56"
              >
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
