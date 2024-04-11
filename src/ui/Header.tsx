import { useState } from "react";
import { FaBars, FaRegUser } from "react-icons/fa";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  const [isShowNav, setIsShowNav] = useState<boolean>(false);

  function handleToggleNav() {
    setIsShowNav((open: boolean) => !open);
  }
  function handleCloseNav() {
    setIsShowNav(false);
  }

  return (
    <header className="bg-white relative">
      {/* Inner wrapper */}
      <div className="max-w-[1920px] mx-auto px-4 flex items-center justify-between h-[81px] ">
        {/* Bar icons mobile */}
        <span className="lg:hidden icons-wrapper" onClick={handleToggleNav}>
          <FaBars />
        </span>
        {/* Logo and desktopNav Logo */}
        <div className="">
          {/* Logo Wrapper */}
          <Logo />
          {/* Desktop Nav Wrapper */}
          <nav className="hidden lg:flex">test Content</nav>
        </div>

        {/* user Icon and options */}
        <div>
          <span className="icons-wrapper">
            <FaRegUser className="text-gray-500" />
          </span>
        </div>
      </div>
      {/* Nav in mobile */}
      <Nav
        display="mobile"
        isShow={isShowNav}
        handleCloseNav={handleCloseNav}
      />
    </header>
  );
}

export default Header;
