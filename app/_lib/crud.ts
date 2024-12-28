// CRUD => Create, Read, Update, Delete

import { Theme } from "./types";

const retrieveDarkModePref = (userSignedIn: boolean): void => {
  if (!userSignedIn) {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  } else {
    // Database retrieval
  }
};

const toggleDarkMode = (userSignedIn: boolean, theme: Theme): void => {
  if (!userSignedIn) {
    switch (theme) {
      case "light":
        localStorage.theme = "light";
        break;
      case "dark":
        localStorage.theme = "dark";
        break;
      case "OS-pref":
        localStorage.removeItem("theme");
        break;
    }
  } else {
    // Database toggle
  }

  retrieveDarkModePref(userSignedIn);
};

export { retrieveDarkModePref, toggleDarkMode };
