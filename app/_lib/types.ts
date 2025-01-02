import { ReactNode } from "react";

type Size = {
  width: number;
  height: number;
};

type HeaderDesignProps = {
  isScrolled: boolean;
};

type Theme = "light" | "dark" | "OS-pref";

type NavBtnProps = {
  children: ReactNode;
  sectionLink: string;
  twClassNames?: string;
};

type LogoProps = {
  size: Size;
};

type Status = "Basic" | "Member" | "Premium" | "Team Manager" | "Admin";

type UserMenuProps = {
  userStatus: Status;
};

export type {
  Size,
  HeaderDesignProps,
  Theme,
  NavBtnProps,
  LogoProps,
  Status,
  UserMenuProps,
};
