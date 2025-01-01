"use client";

import { HeaderDesignProps } from "@/app/_lib/types";
import NavBtn from "./NavBtn";
import DefaultUserMenu from "./user-menus/DefaultUserMenu";
import SignedInMenu from "./user-menus/SignedInMenu";
// import Logo from "../../Logo";
// import { logoSizes } from "@/app/_lib/constants";

const HeaderDesign = ({ isScrolled }: HeaderDesignProps) => {
  //* TEMPORARY - REMOVE WHEN STATE MANAGEMENT ADDED.
  const userSignedIn = false;

  return (
    <header
      className={`${
        isScrolled ? "text-xl h-12" : "text-3xl h-24"
      } sticky top-0 bg-gradient-to-br from-orange-3 to-blue-3 dark:from-blue-7 dark:to-orange-6`}
    >
      <nav className="h-full">
        <ul className="flex flex-row items-center justify-evenly h-full">
          <NavBtn sectionLink="/home">
            {/* <Logo size={logoSizes.medium} /> */}
            AllSort
          </NavBtn>
          <NavBtn sectionLink="#home-about" twClassNames="nav hover:nav-hover">
            About
          </NavBtn>
          <NavBtn
            sectionLink="#home-benefits"
            twClassNames="nav hover:nav-hover"
          >
            Benefits
          </NavBtn>
          <NavBtn
            sectionLink="#home-reviews"
            twClassNames="nav hover:nav-hover"
          >
            Reviews
          </NavBtn>
          <NavBtn sectionLink="#home-plans" twClassNames="nav hover:nav-hover">
            Plans
          </NavBtn>
          {!userSignedIn ? (
            <DefaultUserMenu />
          ) : (
            <SignedInMenu userStatus={"basic"} />
          )}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDesign;
