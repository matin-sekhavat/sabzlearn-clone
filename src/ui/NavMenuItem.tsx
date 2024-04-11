import { BiChevronLeft } from "react-icons/bi";
import { NavItemType } from "./NavMenuList";
type SubNavItemType = {
  subTitle: string;
  subPath: string;
};

type NavMenuItemProps = {
  name: string;
  currentNav: string;
  onSelectedNav: (name: string) => void;
  nav: NavItemType;
};

function NavMenuItem({
  name,
  currentNav,
  onSelectedNav,
  nav,
}: NavMenuItemProps) {
  return (
    <li className="  ">
      <span
        className={`flex items-center justify-between cursor-pointer ${
          currentNav === name ? "text-green-700" : ""
        }`}
        onClick={() => onSelectedNav(name)}
      >
        <span>{nav.title}</span>
        <span
          className={`${
            currentNav === name ? "-rotate-90" : ""
          } transition-all`}
        >
          <BiChevronLeft size={24} />
        </span>
      </span>
      {currentNav === name && (
        <ul className=" p-3 w-full text-sm  bg-gray-200 mt-3 rounded-md leading-6 space-y-2">
          {nav.subMenu.map((subItem: SubNavItemType) => (
            <li
              key={subItem.subPath}
              className="hover:text-green-700 text-ellipsis"
            >
              {subItem.subTitle}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default NavMenuItem;
