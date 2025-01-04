"use client";

import { userIconSizes } from "@/app/_lib/constants";
import { UserMenuProps } from "@/app/_lib/types";
import Image from "next/image";
import NavBtn from "../NavBtn";

const SignedInMenu = ({ userStatus, userIconPath }: UserMenuProps) => {
  const { width, height } = userIconSizes.small;

  return (
    <li className="px-4 textl-blue-subtle float-left overflow-hidden">
      <button className="flex flex-row items-center cursor-pointer">
        <Image
          priority
          src={userIconPath}
          width={width}
          height={height}
          alt="User profile picture"
          className="rounded-full mr-2 overflow-hidden"
        />
        <div className="flex flex-col items-start justify-center">
          <p className="text-xl">Username</p>
          <p className="text-sm">{userStatus}</p>
        </div>
      </button>
      <ul className="hidden">
        <NavBtn sectionLink="/">Profile</NavBtn>
        <NavBtn sectionLink="/">Dashboard</NavBtn>
        <NavBtn sectionLink="/">Settings</NavBtn>
        <NavBtn sectionLink="/">Sign out</NavBtn>
      </ul>
    </li>
  );
};

export default SignedInMenu;
