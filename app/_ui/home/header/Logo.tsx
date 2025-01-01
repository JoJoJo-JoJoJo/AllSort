import { LogoProps } from "../../_lib/types";
import Image from "next/image";

const Logo = ({ size }: LogoProps) => {
  return (
    <Image
      src="/RoloImg.jpg"
      alt="AllSort Logo"
      width={size.width}
      height={size.height}
    />
  );
};

export default Logo;
