import { useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import Logo from "./Logo";
import Overlay from "./Overlay";
import { IoMdClose } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";

type mobileNav = {
  display: "mobile";
  isShow: boolean;
  handleCloseNav: () => void;
};

type desktopNav = {
  display: "desktop";
  isShow: never;
  handleCloseNav: never;
};

type navProps = mobileNav | desktopNav;

function Nav({ display, isShow, handleCloseNav }: navProps) {
  console.log(display);
  const mobileRef = useRef<HTMLDivElement>(null);

  useOutsideClick(mobileRef, handleCloseNav);

  return (
    <>
      <div
        ref={mobileRef}
        className={`fixed top-0 ${
          isShow ? "right-0" : "-right-64"
        } bottom-0 p-4 w-64 transition-all  bg-white z-50`}
      >
        {/* Upperside nav mobile btns & logo */}
        <div className="flex items-center  justify-between border-b pb-6 border-neutral-200">
          <div>
            <Logo />
          </div>
          {/* nav Btns wrapper */}
          <div className="flex items-center gap-x-3 text-xl">
            {/* Theme button */}
            <span className="icons-wrapper">
              <IoMoonOutline />
            </span>
            {/* Close Btn */}
            <span className="icons-wrapper" onClick={handleCloseNav}>
              <IoMdClose />
            </span>
          </div>
        </div>
      </div>
      <Overlay isShow={isShow} />
    </>
  );
}

export default Nav;