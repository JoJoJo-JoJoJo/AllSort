"use client";

import { HeaderDesignProps } from "@/app/_lib/types";

const HeaderDesign = ({ isSmall }: HeaderDesignProps) => {
  return (
    <header
      className={`${isSmall ? "text-xl" : "text-3xl"} sticky top-0`}
    >
      HEADER
    </header>
  );
};

export default HeaderDesign;
