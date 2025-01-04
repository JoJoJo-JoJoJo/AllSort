import { SizeConst } from "./types";

const logoSizes: SizeConst = {
  small: {
    width: 40,
    height: 40,
  },
  medium: {
    width: 80,
    height: 80,
  },
  large: {
    width: 160,
    height: 160,
  },
};

const defaultUserIconPath = "/images/defaultUserIcon.svg";

const userIconSizes: SizeConst = {
  small: {
    width: 40,
    height: 40,
  },
  medium: {
    width: 60,
    height: 60,
  },
  large: {
    width: 320,
    height: 320,
  },
};

export { logoSizes, defaultUserIconPath, userIconSizes };
