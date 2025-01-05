"use client";

import { userIconSizes } from "@/app/_lib/constants";
import { UserMenuProps } from "@/app/_lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getIconBorder } from "@/app/_lib/actions";
import DropdownNav from "./DropdownNav";

const SignedInMenu = ({ userStatus, userIconPath }: UserMenuProps) => {
  const [statusClass, setStatusClass] = useState<string>("");
  const { width, height } = userIconSizes.small;

  useEffect(() => {
    const classname = getIconBorder(userStatus);
    setStatusClass(classname);
  }, [userStatus]);

  return (
    <div
      className={`relative px-4 overflow-hidden hover:block rounded-md opacity-80 hover:opacity-100`}
    >
      <button className="flex flex-row items-center cursor-pointer py-4 m-0">
        <Image
          priority
          src={userIconPath}
          width={width}
          height={height}
          alt="User profile picture"
          className={`${statusClass} rounded-full mr-2 overflow-hidden border-2`}
        />
        <div className="flex flex-col items-start justify-center">
          <p className="text-xl">Username</p>
          <p className={`${statusClass} text-sm`}>{userStatus}</p>
        </div>
      </button>
      <DropdownNav />
    </div>
  );
};

export default SignedInMenu;
