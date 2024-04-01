import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/images/logo/site_logo_white.svg";
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
                      style={{ width: "auto", height: "auto" }}
                      alt="img not found"
                    />
                  </Link>
                </div>
                <div className="offcanvas__close" onClick={() => setIsOffCanvasOpen(false)}>
                  <svg
                    className="menu-close-btn"
                    xmlns="http://www.w3.org/2000/svg"
                    width="33.666"
                    height="33.666"
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
            <div className="offcanvas__contact text-center">
              <h4 className="offcanvas__title">Contact Info</h4>
              <div className="offcanvas__contact-text mb-2">
                <p>
                  <a
                    href="mailto:paradox@example"
                    target="_blank"
                    rel="noreferrer"
                  >
                    paradox@example.com
                  </a>
                </p>
                <span>
                  <a href="tel:725214456" target="_blank" rel="noreferrer">
                    725 214 456
                  </a>
                </span>
              </div>
              <div className="offcanvas__contact-text">
                <p>
                  <Link target="_blank" href="https://www.google.com/maps">
                    Folkungagatan 83, Stockholm, Sweden
                  </Link>
                </p>
              </div>
            </div>
            <div className="offcanvas__devider"></div>
            <div className="offcanvas__social">
              <ul>
                <li>
                  <Link target="_blank" href="https://www.facebook.com">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.instagram.com">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.twitter.com">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.linkedin.com">
                    Linkedin
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
