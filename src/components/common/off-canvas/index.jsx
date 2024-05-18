import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/images/logo/logo-title-dark.png";
import icon_globe from "@assets/images/icons/icon_globe.svg";
import MobileMenus from "./mobile-menus";

const OffCanvasMain = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {
  return (
    <React.Fragment>
      <div className="fix">
        <div className={`offcanvas__info ${isOffCanvasOpen ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="img not found"
                    />
                  </Link>
                </div>
                <div className="offcanvas__close" onClick={() => setIsOffCanvasOpen(false)}>
                  <svg
                    className="menu-close-btn"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.666"
                    height="22.666"
                    viewBox="0 0 33.666 33.666"
                  >
                    <path d="m1.414 1.414 30.83763383 30.83763383"></path>
                    <path d="M1.414 32.252 32.25163383 1.41436617"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="mobile-menu fix mb-4 d-lg-none mean-container">
              <div className="mean-bar">
                <MobileMenus />
              </div>
            </div>
            <div className="header_btns_group center_div" style={{ flexDirection: 'column', gap: '15px' }}>
            <div id="translate-switcher" style={{ height: '50px', width: '200px' }}>
                </div>
             {/* <GoogleTranslateDesktop /> */}
              <Link href="/order" className="bd-btn-link btn_dark" style={{ width: '250px' }}>
                <span className="b  yd-button-content-wrapper">
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">Make an order</span>
                      <span className="bd-button-text">Order now</span>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
            <div className="offcanvas__contact text-center mt-10">
              <h4 className="offcanvas__title">Contact Info</h4>
              <div className="offcanvas__contact-text mb-2">
                <p>
                  <a
                    href="mailto:paradox@example"
                    target="_blank"
                    rel="noreferrer"
                  >
                    cartoongifts.eu@gmail.com
                  </a>
                </p>

              </div>

            </div>
            <div className="offcanvas__devider"></div>
            <div className="offcanvas__social">
              <ul>
                <li>
                  <Link target="_blank" href="https://www.facebook.com/cartoongiftsbulgaria1">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.instagram.com/cartoongiftsbulgaria/?hl=en">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`offcanvas__overlay ${isOffCanvasOpen ? "overlay-open" : ""}`} onClick={() => setIsOffCanvasOpen(false)}></div>
    </React.Fragment>
  );
};

export default OffCanvasMain;
