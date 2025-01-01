import { UserMenuProps } from "@/app/_lib/types";
import Image from "next/image";

const SignedInMenu = ({ userStatus }: UserMenuProps) => {
  // User menu should dropdown on hover.

  return (
    <li className="h-3/5 md:w-1/8 px-4 textl-blue-subtle flex flex-row justify-between items-center">
      <Image
        priority
        src={"/images/defaultUserIcon.svg"}
        width={32}
        height={32}
        alt="'User is not signed in' icon."
      />
      <div className="">
        <p>Username</p>
        <p>{`Status: ${userStatus}`}</p>
      </div>
    </li>
  );
};

export default SignedInMenu;
