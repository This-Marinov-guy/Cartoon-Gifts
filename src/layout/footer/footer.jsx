import Link from 'next/link';
import React from 'react';
import icon_mapwork from '@assets/images/icons/icon_mapmark.svg'
import site_logo_white from '@assets/images/logo/site_logo_white.svg'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="site_footer style_1">
      <div className="footer_widget_area bg_dark_3">
        <div className="container">
          <div className="footer_widget_grid">
            <div className="site_logo">
              <Link className="site_link" href="/">
                <Image src={site_logo_white} style={{ width: "auto", height: "auto" }} alt="Site Logo - Paradox - Agency Template" />
              </Link>
            </div>
            <div className="footer_widget">
              <h3 className="footer_widget_title">Contact Us</h3>
              <div className="icon_list_widget">
                <h4 className="widget_title mb-0">
                  If you want to Get a New Idea:
                </h4>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <Link href="mailto:contact@paradox.com">
                      <span className="list_item_text">
                        contact@paradox.com
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_widget">
              <h3 className="footer_widget_title">Find Us</h3>
              <div className="icon_list_widget">
                <ul className="icon_list unordered_list_block">
                  <li>
                    <div className="w-location mb-2">
                      <Image src={icon_mapwork} style={{ width: "auto", height: "auto" }} alt="Icon Mapmark" />
                    </div>
                    <Link target="_blank" href="https://www.google.com/maps">
                      <span className="list_item_text">
                        1989 Timber Ridge Road <small className="d-md-block">Sacramento CA, California</small>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_widget">
              <h3 className="footer_widget_title">Newsletter</h3>
              <form action="#">
                <div className="small_newsletter_form">
                  <input type="email" placeholder="Email Adreess" />
                  <button type="submit">
                    <i className="far fa-arrow-right"></i>
                  </button>
                </div>
                <div className="form-check mb-0">
                  <input type="checkbox" id="checkMeOut" />
                  <label htmlFor="checkMeOut">Check me out</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom bg_dark_3">
        <div className="container">
          <div className="footer_bottom_grid">
            <div className="copyright_widget">
              Copyright © 2023 by <Link target="_blank" href="https://themeforest.net/user/bdevs/portfolio"><u>Bdevs</u></Link> All Rights Reserved.
            </div>
            <div className="footer_social">
              <ul className="social_icon unordered_list_end">
                    <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;