// Database queries and actions

import { FilePath } from "tailwindcss/types/config";

const fetchUserIcon = (userId: number): FilePath => {
  console.log(userId);
  // Fetch the user's icon. So far this is used in:
  // SignedInMenu.tsx
  return "/images/defaultUserIcon.svg";
};

export { fetchUserIcon };
