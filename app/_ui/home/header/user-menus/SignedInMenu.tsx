import { UserMenuProps } from "@/app/_lib/types";
import Image from "next/image";

const SignedInMenu = ({ userStatus }: UserMenuProps) => {
  // User menu should dropdown on hover.

  // Profile image should be fetched from user data - if none, load default icon.

  return (
    <li className="h-3/5 md:w-1/8 px-4 textl-blue-subtle flex flex-row items-center">
      <div className="relative">
        <Image
          priority
          src={"/images/defaultUserIcon.svg"}
          fill={true}
          alt="User profile picture"
          className="rounded-full"
        />
      </div>
      <div className="">
        <p className="text-xl">Username</p>
        <p className="text-sm">{`${userStatus} status`}</p>
      </div>
    </li>
  );
};

export default SignedInMenu;
