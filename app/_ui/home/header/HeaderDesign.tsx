"use client";

import { HeaderDesignProps } from "@/app/_lib/types";
import NavBtn from "./NavBtn";
import DefaultUserMenu from "./user-menus/DefaultUserMenu";
import SignedInMenu from "./user-menus/SignedInMenu";
// import Logo from "../../Logo";
// import { logoSizes } from "@/app/_lib/constants";

const HeaderDesign = ({ isScrolled }: HeaderDesignProps) => {
  //* TEMPORARY - REMOVE WHEN STATE MANAGEMENT ADDED.
  const userSignedIn = true;

  return (
    <header
      className={`${
        isScrolled ? "text-xl h-12" : "text-3xl h-24"
      } sticky top-0 bg-gradient-to-br from-orange-3 to-blue-3 dark:from-blue-7 dark:to-orange-6`}
    >
      <nav className="h-full">
        <ul className="flex flex-row items-center justify-evenly h-full">
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
          {!userSignedIn ? (
            <DefaultUserMenu />
          ) : (
            <SignedInMenu userStatus={"Basic"} />
          )}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDesign;
