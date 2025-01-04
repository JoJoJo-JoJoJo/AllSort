"use client";

const DefaultUserMenu = () => {
  return (
    <li className="px-4 textl-blue-subtle flex flex-row justify-between items-center">
      <button
        onClick={() => alert("This would take you to the sign-in page.")}
        className="border-2 border-blue-2 rounded-md text-xl px-4 py-2 mx-2"
      >
        Sign In
      </button>
      <button
        onClick={() => alert("This would take you to the registration page.")}
        className="border-2 border-orange-2 rounded-md text-xl px-4 py-2 mx-2"
      >
        Start Now For Free
      </button>
    </li>
  );
};

export default DefaultUserMenu;
