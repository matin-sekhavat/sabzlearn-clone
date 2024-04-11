import { useState } from "react";
import NavMenuItem from "./NavMenuItem";

type SubNavItemType = {
  subTitle: string;
  subPath: string;
};

export type NavItemType = {
  id: number;
  title: string;
  enTitle: string;
  hasSub: boolean;
  subMenu: SubNavItemType[];
};

type NavMenuListprops = {
  display: "mobile" | "desktop";
};

function NavMenuList({ display }: NavMenuListprops) {
  const NavArray: NavItemType[] = [
    {
      id: 1,
      title: "فرانت اند",
      enTitle: "front-end",
      hasSub: true,
      subMenu: [
        { subTitle: "آموزش HTML", subPath: "html-tutorial" },
        { subTitle: "آموزش CSS", subPath: "css-tutorial" },
        { subTitle: "آموزش FlexBox", subPath: "flexbox-tutorial" },
        { subTitle: "آموزش CSS Grid", subPath: "css-grid-tutorial" },
        { subTitle: "مینی پروژه های تخصصی با Css", subPath: "css-projects" },
        { subTitle: "آموزش Tailwind CSS", subPath: "tailwind-css-tutorial" },
        {
          subTitle: "آموزش اصولی طراحی قالب",
          subPath: "web-design-principles",
        },
        { subTitle: "آموزش بوت استرپ", subPath: "bootstrap-tutorial" },
        { subTitle: "آموزش جاوااسکریپت", subPath: "javascript-tutorial" },
        { subTitle: "پروژه های تخصصی با JS", subPath: "js-projects" },
        { subTitle: "آموزش جامع ری اکت ReactJS", subPath: "reactjs-tutorial" },
        { subTitle: "آموزش ویو جی اس", subPath: "vuejs-tutorial" },
        { subTitle: "آموزش وی اس کد", subPath: "vscode-tutorial" },
      ],
    },
    {
      id: 2,
      title: "پایتون",
      enTitle: "python",
      hasSub: true,
      subMenu: [
        { subTitle: "دوره آموزش پایتون", subPath: "python-course" },
        { subTitle: "پروژه های کاربردی با پایتون", subPath: "python-projects" },
        {
          subTitle: "بهینه نویسی کد ها در پایتون",
          subPath: "python-optimization",
        },
        { subTitle: "متخصص جنگو", subPath: "django-expert" },
        {
          subTitle: "مصور سازی داده با پایتون",
          subPath: "python-data-modeling",
        },
      ],
    },
    {
      id: 3,
      title: "پی اچ پی",
      enTitle: "php",
      hasSub: true,
      subMenu: [
        { subTitle: "ربات تلگرام با php", subPath: "telegram-bot" },
        { subTitle: "پروژه های کاربردی با php", subPath: "usefull-project" },
        {
          subTitle: "بهینه نویسی کد ها در پایتون",
          subPath: "python-optimization",
        },
        { subTitle: "متخصص جنگو", subPath: "django-expert" },
        {
          subTitle: "مصور سازی داده با پایتون",
          subPath: "python-data-modeling",
        },
      ],
    },
  ];

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
        {NavArray.map((item) => (
          <NavMenuItem
            key={item.id}
            currentNav={currentNavItem}
            onSelectedNav={handleCurrentSelectedNav}
            name={item.enTitle}
            nav={item}
          />
        ))}
      </ul>
    );
}

export default NavMenuList;
