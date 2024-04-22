import React, { useEffect, useState } from "react";
import site_logo from "@assets/images/logo/logo-title.png";
import icon_globe from "@assets/images/icons/icon_globe.svg";
import Image from "next/image";
import Link from "next/link";
import Menus from "./menus";
import OffCanvasMain from "@components/common/off-canvas";
import GoogleTranslateDesktop from "@ui/google-translate-desktop";

const HeaderSix = () => {
  // Sticky Menu Area start
  const [desktop, setDesktop] = useState(false)

  useEffect(() => {
    sticky()

    window.addEventListener("resize", sticky);
    return () => {
      window.removeEventListener("resize", sticky);
    };
  }, []);

  const sticky = () => {
    setDesktop(window.innerWidth > 991);

    // if (desktop) {
    //   const header = document.querySelector(".header-main");
    //   const scrollTop = window.scrollY;
    //   scrollTop >= 40
    //     ? header.classList.add("sticky")
    //     : header.classList.remove("sticky");
    // }
  };
  // Sticky Menu Area End

  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

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
              <div className="header_btns_group d-none d-lg-flex center_div" style={{ gap: '15px' }}>
                {desktop && <GoogleTranslateDesktop />}
                <Link href="/order" className="bd-btn-link btn_dark" style={{ width: '200px' }}>
                  <span className="bd-button-content-wrapper">
                    <span className="pd-animation-flip">
                      <span className="bd-btn-anim-wrapp">
                        <span className="bd-button-text">Make an order</span>
                        <span className="bd-button-text">Order now</span>
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
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
      {!desktop && <OffCanvasMain
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />}
      {/* full canvas area end */}
    </>
  );
};

export default HeaderSix;
