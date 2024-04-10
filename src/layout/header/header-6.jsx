import React, { useEffect, useState } from "react";
import site_logo from "@assets/images/logo/logo-title.png";
import icon_globe from "@assets/images/icons/icon_globe.svg";
import Image from "next/image";
import Link from "next/link";
import Menus from "./menus";
import OffCanvasMain from "@components/common/off-canvas";
import NiceSelect from "@ui/niceSelect";

const HeaderSix = () => {
  // Sticky Menu Area start
  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  });

  const sticky = (e) => {
    if (window.innerWidth > 1200) {
      const header = document.querySelector(".header-main");
      const scrollTop = window.scrollY;
      scrollTop >= 40
        ? header.classList.add("sticky")
        : header.classList.remove("sticky");
    }
  };
  // Sticky Menu Area End

  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const selectHandler = e => { }

  return (
    <>
      <header className="site_header site_header_1 header-main">
        <div className="container">
          <div className="header_wrapper">
            <div className="site_logo">
              <Link className="site_link" href="/">
                <Image
                  src={site_logo}
                  className='logo'
                  style={{transform: 'scale(0.8)'}}
                  alt="Site Logo - Paradox - Agency Template"
                />
              </Link>
            </div>
            <div className="mean__menu-wrapper d-none d-lg-block">
              <div className="main-menu">
                <nav id="mobile-menu">
                  <Menus />
                </nav>
                <div className="header__hamburger ml-50 d-none">
                  <button
                    type="button"
                    className="hamburger-btn offcanvas-open-btn"
                    onClick={() => setIsOffCanvasOpen(true)}
                  >
                    <span>01</span>
                    <span>01</span>
                    <span>01</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="header_right">
              <ul className="header_btns_group unordered_list_end d-none d-md-flex">
                <li>
                  <div className="select_option m-0">
                    <div className="icon_wrap">
                      <Image
                        src={icon_globe}
                        style={{ width: "20px", height: "auto" }}
                        alt="Globe Icon"
                      />
                    </div>
                    <NiceSelect
                      options={[
                        { value: "English", text: "English" },
                        { value: "Bulgarian", text: "Bulgarian" },
                        { value: "Romanian", text: "Romanian" },
                        { value: "Serbian", text: "Serbian" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name="English"
                    />
                  </div>
                </li>
                <li>
                  <Link href="/order" className="bd-btn-link btn_dark">
                    <span className="bd-button-content-wrapper">
                      <span className="pd-animation-flip">
                        <span className="bd-btn-anim-wrapp">
                          <span className="bd-button-text">Make an order</span>
                          <span className="bd-button-text">Order now</span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
              <div className="offcanvas-toggle d-lg-none">
                <button
                  type="button"
                  className="bar-icon"
                  style={{ position: 'fixed', top: '5%', right: '5%' }}
                  onClick={() => setIsOffCanvasOpen(true)}
                >
                  <span></span>
                  <span>
                    <small></small>
                  </span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* full canvas area start */}
      <OffCanvasMain
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* full canvas area end */}
    </>
  );
};

export default HeaderSix;
