"use client";

import { useEffect, useState } from "react";
import HeaderDesign from "./HeaderDesign";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled((prev) => {
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

  return <HeaderDesign isScrolled={isScrolled} />;
};

export default Header;
