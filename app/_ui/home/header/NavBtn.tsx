import { NavBtnProps } from "@/app/_lib/types";
import Link from "next/link";

const NavBtn = ({ children, sectionLink, twClassNames }: NavBtnProps) => {
  return (
    <li
      className={`flex justify-center items-center h-3/5 px-4 ${
        twClassNames ?? ""
      }`}
    >
      <Link href={sectionLink} scroll={false} className="textl-blue-subtle">
        {children}
      </Link>
    </li>
  );
};

export default NavBtn;
