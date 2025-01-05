// Database queries and actions

import { FilePath } from "tailwindcss/types/config";
import { Status } from "./types";

const fetchUserIcon = (userId: number): FilePath => {
  console.log(userId);
  // Fetch the user's icon. So far this is used in:
  // SignedInMenu.tsx
  return "/images/defaultUserIcon.svg";
};

const getIconBorder = (status: Status): string => {
  if (!status) throw new Error("Status is invalid.");

  switch (status) {
    case "Basic":
      return "status-basic";
    case "Member":
      return "status-member";
    case "Premium":
      return "status-premium";
    case "Team Manager":
      return "status-team-manager";
    case "Admin":
      return "status-admin";
    default:
      return "";
  }
};

export { fetchUserIcon, getIconBorder };
