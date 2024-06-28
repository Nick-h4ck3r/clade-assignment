import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="px-14 py-10 flex flex-col *:border-y *:p-3 *:cursor-pointer *:duration-300">
      <Link className="hover:bg-orange-100" href={"/jobs/1"}>Job 1</Link>
      <Link className="hover:bg-orange-100" href={"/jobs/1"}>Job 2</Link>
      <Link className="hover:bg-orange-100" href={"/jobs/1"}>Job 3</Link>
      <Link className="hover:bg-orange-100" href={"/jobs/1"}>Job 4</Link>
    </div>
  );
};

export default page;