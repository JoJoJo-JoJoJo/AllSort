"use client";

import { useEffect, useState } from "react";
import HeaderDesign from "./HeaderDesign";

const Header = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSmall((prev) => {
        if (
          !prev &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        )
          return true;

        if (
          prev &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        )
          return false;

        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return <HeaderDesign isSmall={isSmall} />;
};

export default Header;
