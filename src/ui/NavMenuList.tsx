import { useState } from "react";
import NavMenuItem from "./NavMenuItem";

type NavMenuListprops = {
  display: "mobile" | "desktop";
};
function NavMenuList({ display }: NavMenuListprops) {
  const [currentNavItem, setCurrentNavItem] = useState<string>("");

  function handleCurrentSelectedNav(name: string) {
    if (currentNavItem === name) {
      setCurrentNavItem("");
    } else {
      setCurrentNavItem(name);
    }
  }

  if (display === "mobile")
    return (
      <ul className="w-full flex flex-col gap-5 ">
        <NavMenuItem
          name="front"
          currentNav={currentNavItem}
          onSelectedNav={handleCurrentSelectedNav}
        />
        <NavMenuItem
          name="back"
          currentNav={currentNavItem}
          onSelectedNav={handleCurrentSelectedNav}
        />
      </ul>
    );
}

export default NavMenuList;
