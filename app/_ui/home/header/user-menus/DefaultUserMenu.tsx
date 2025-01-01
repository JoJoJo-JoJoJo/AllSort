import Image from "next/image";

const DefaultUserMenu = () => {
  return (
    <li className="h-3/5 md:w-1/8 px-4 textl-blue-subtle flex flex-row justify-between items-center">
      <Image
        priority
        src={"/images/defaultUserIcon.svg"}
        width={32}
        height={32}
        alt="'User is not signed in' icon."
      />
      <button className="btn text-xl w-3/5 h-full">Sign In</button>
    </li>
  );
};

export default DefaultUserMenu;
