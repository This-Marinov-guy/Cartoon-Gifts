import menu_data from "@data/menu-data";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";

const Menus = () => {
 const { t } = useTranslation('layout');

  return (
    <ul>
      {menu_data.map((menu, i) => (
        <li
          key={i}
          className={` ${menu.megaMenu ? "has-dropdown has-mega-menu" : ""} ${menu.hasDropdown ? "has-dropdown" : ""}`}
        >
          <Link href={menu.link}>{t(menu.tag)}</Link>
          {menu.hasDropdown && (
            <ul className="submenu">
              {menu.submenus.map((sub, i) => (
                <li key={i}>
                  <Link href={sub.link}>{sub.title}</Link>
                </li>
              ))}
            </ul>
          )}
          {menu.mega_menus && (
            <ul className="mega-menu">
              {menu.mega_menus.map((mega, i) => (
                <li key={i}>
                  <Link href={mega.link} className="mega-menu-title">
                    {mega.title}
                  </Link>
                  <ul>
                    {mega.submenus.map((sub_mega, i) => (
                      <li key={i}>
                        <Link href={sub_mega.link}>{sub_mega.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menus;
