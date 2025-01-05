"use client";

import { HeaderDesignProps } from "@/app/_lib/types";
import NavBtn from "./NavBtn";
import DefaultUserMenu from "./user-menus/DefaultUserMenu";
import SignedInMenu from "./user-menus/SignedInMenu";
import { useEffect, useState } from "react";
import { fetchUserIcon } from "@/app/_lib/actions";
import { FilePath } from "tailwindcss/types/config";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { defaultUserIconPath } from "@/app/_lib/constants";
// import Logo from "../../Logo";
// import { logoSizes } from "@/app/_lib/constants";

const HeaderDesign = ({ isScrolled }: HeaderDesignProps) => {
  //* TEMPORARY - REMOVE WHEN STATE MANAGEMENT ADDED. --------------------------------------
  const userSignedIn = true;
  const [userIconPath, setUserIconPath] = useState<FilePath | StaticImport>(
    defaultUserIconPath
  );

  useEffect(() => {
    setUserIconPath(fetchUserIcon(1));
  }, []);
  //* --------------------------------------------------------------------------------------

  return (
    <header
      className={`${
        isScrolled ? "text-xl h-12" : "text-3xl h-24"
      } sticky top-0 bg-gradient-to-br from-orange-3 to-blue-3 dark:from-blue-7 dark:to-orange-6`}
    >
      <nav className="h-full px-8 flex justify-between items-center">
        <ul className="flex flex-row items-center justify-between h-full overflow-hidden w-4/5">
          <NavBtn sectionLink="/">
            {/* <Logo size={logoSizes.medium} /> */}
            AllSort
          </NavBtn>
          <NavBtn sectionLink="/about" twClassNames="nav">
            About
          </NavBtn>
          <NavBtn sectionLink="/tools" twClassNames="nav">
            Tools
          </NavBtn>
          <NavBtn sectionLink="/plans" twClassNames="nav">
            Plans
          </NavBtn>
          <NavBtn sectionLink="/faqs" twClassNames="nav">
            FAQs
          </NavBtn>
          <NavBtn sectionLink="/contact-us" twClassNames="nav">
            Contact us
          </NavBtn>
        </ul>
        {!userSignedIn ? (
          <DefaultUserMenu />
        ) : (
          <SignedInMenu userStatus={"Premium"} userIconPath={userIconPath} />
        )}
      </nav>
    </header>
  );
};

export default HeaderDesign;
