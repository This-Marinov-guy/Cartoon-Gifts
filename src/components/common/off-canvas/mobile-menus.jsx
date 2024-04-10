import React, { useState } from "react";
import Link from "next/link";
// internal
import menu_data from "@data/menu-data";

const MobileMenus = () => {
  const [subMenu, setSubMenu] = useState("");
  const [navTitle, setNavTitle] = useState("");
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
              <Link href={menu.link}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav >
  );
};

export default MobileMenus;
