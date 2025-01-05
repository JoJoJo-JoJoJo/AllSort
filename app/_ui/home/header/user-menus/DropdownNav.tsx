import React from "react";
import NavBtn from "../NavBtn";

const DropdownNav = () => {
  return (
    <ul className="hidden hover:block absolute lg:min-w-80 zi-2 textl-blue-subtle">
      <NavBtn sectionLink="/">Profile</NavBtn>
      <NavBtn sectionLink="/dashboard">Dashboard</NavBtn>
      <NavBtn sectionLink="/dashboard/settings">Settings</NavBtn>
      <NavBtn sectionLink="/">Sign out</NavBtn>
    </ul>
  );
};

export default DropdownNav;
