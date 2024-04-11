import { BiChevronLeft } from "react-icons/bi";

type NavMenuItemProps = {
  name: string;
  currentNav: string;
  onSelectedNav: (name: string) => void;
};

function NavMenuItem({ name, currentNav, onSelectedNav }: NavMenuItemProps) {
  const handleSubMenu = () => {
    if (currentNav === name) {
      onSelectedNav("");
    } else {
      onSelectedNav(name);
    }
  };

  return (
    <li className="  ">
      <span
        className={`flex items-center justify-between cursor-pointer ${
          currentNav === name ? "text-green-700" : ""
        }`}
        onClick={handleSubMenu}
      >
        <span>{name}</span>
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
          <li className="hover:text-green-700">{name} 1</li>
          <li className="hover:text-green-700">{name} 2</li>
          <li className="hover:text-green-700">{name} 3</li>
        </ul>
      )}
    </li>
  );
}

export default NavMenuItem;
