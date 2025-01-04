import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";
import { FilePath } from "tailwindcss/types/config";

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
  userIconPath: FilePath | StaticImport;
};

type SizeConst = {
  small: Size;
  medium: Size;
  large?: Size;
};

export type {
  Size,
  HeaderDesignProps,
  Theme,
  NavBtnProps,
  LogoProps,
  Status,
  UserMenuProps,
  SizeConst,
};
