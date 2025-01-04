const DefaultUserMenu = () => {
  return (
    <li className="h-3/5 md:w-1/8 px-4 textl-blue-subtle flex flex-row justify-between items-center">
      <button className="btn-base text-xl px-4 py-2">Sign In</button>
      <button className="border-2 border-orange-2 rounded-md text-xl px-4 py-2">
        Start Now For Free
      </button>
    </li>
  );
};

export default DefaultUserMenu;
