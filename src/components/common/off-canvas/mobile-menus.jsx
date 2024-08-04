import React, { useState } from "react";
import Link from "next/link";
import menu_data from "@data/menu-data";
import useTranslation from "next-translate/useTranslation";

const MobileMenus = () => {
  const [subMenu, setSubMenu] = useState("");
  const [navTitle, setNavTitle] = useState("");

  const { t } = useTranslation('layout');

  //openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  // openSubMobileMenu
  const openSubMobileMenu = (s_menu) => {
    if (subMenu === s_menu) {
      setSubMenu("");
    } else {
      setSubMenu(s_menu);
    }
  };
  return (
    <nav className="mean-nav">
      <div className="offcanvas__social">
        <ul>
          {menu_data.map((menu, i) => (
            <li key={i} className="text-center">
              <Link href={menu.link}>{t(menu.tag)}</Link>
            </li>
          ))}
        </ul> 
      </div>
    </nav>
  );
};

export default MobileMenus;
