import React from 'react';

import cta_image_5 from '@assets/images/calltoaction/cta_image_5.png';
import shape_4 from '@assets/images/shapes/shape_4.svg';
import site_logo_dark from '@assets/images/logo/logo-title.png';
import icon_mapmark from '@assets/images/icons/icon_mapmark.svg';

import Image from 'next/image';
import Link from 'next/link';

const FooterFive = () => {
    return (
        <footer className="site_footer style_4">
        <div className="calltoaction_section style_5">
          <div className="container">
            <div className="content_box bg_primary decoration_wrap">
              <div className="row align-items-center">
                <div className="col col-xxl-5 col-xl-6 col-lg-6 order-last">
                  <div className="cta_image">
                    <Image src={cta_image_5} style={{ width: "100%", height: "100%" }} alt="Paradox Call To Action Image" />
                  </div>
                </div>
                <div className="col col-xxl-7 col-xl-6 col-lg-6">
                  <div className="wrapper_box mb-4 mb-lg-0">
                    <div className="section_heading text-white">
                      <h2 className="heading_title mb-0">
                        Let’s Create Something Amazing Together.
                      </h2>
                    </div>
                    <Link href="/contact" className="bd-btn-link btn_warning">
                      <span className="bd-button-content-wrapper">
                         <span className="bd-button-icon">
                          <i className="fa-light fa-arrow-right-long"></i>
                         </span>
                         <span className="pd-animation-flip">
                            <span className="bd-btn-anim-wrapp">
                               <span className="bd-button-text">Get Started</span>
                               <span className="bd-button-text">Get Started</span>
                            </span>
                         </span> 
                      </span>
                   </Link>
                  </div>
                </div>
              </div>
              <div className="deco_item shape_1">
                <Image className="wow fadeInUp" data-wow-delay=".2s" src={shape_4} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer_widget_area">
          <div className="container">
            <div className="row">
              <div className="col col-lg-3 col-md-6">
                <div className="site_logo">
                     <Link className="site_link" href="/">
                    <Image src={site_logo_dark} style={{ width: "100%", height: "100%" }} alt="Site Logo - Paradox - Agency Template" />
                  </Link>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_widget_title">Contact Us</h3>
                  <div className="icon_list_widget">
                    <h4 className="widget_title mb-0">
                      If you want to Get a New Idea:
                    </h4>
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <Link href="mailto:cartoongifts.eu@gmail.com">
                          <span className="list_item_text">
                            cartoongifts.eu@gmail.com
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_widget_title">Find Us</h3>
                  <div className="icon_list_widget">
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <Link href="#">
                          <span className="d-block mb-2">
                            <Image src={icon_mapmark} alt="Icon Mapmark" />
                          </span>
                          <span className="list_item_text">
                            1989 Timber Ridge Road <small className="d-md-block">Sacramento CA, California</small>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_widget_title">Newsletter</h3>
                  <form action="#">
                    <div className="small_newsletter_form">
                      <input type="email" placeholder="Email Adreess"/>
                      <button type="submit">
                        <i className="far fa-arrow-right"></i>
                      </button>
                    </div>
                    <div className="form-check mb-0">
                      <input type="checkbox" id="checkMeOut"/>
                      <label htmlFor="checkMeOut">Check me out</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="footer_bottom_grid">
              <div className="copyright_widget">
                Copyright © 2023 by <Link target="_blank" href="https://themeforest.net/user/bdevs/portfolio"><u>Bdevs</u></Link> All Rights Reserved.
              </div>
              <div className="footer_social">
                <ul className="social_icon unordered_list_end">
                  <li><Link href="https://www.facebook.com/cartoongiftsbulgaria1/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link href="https://www.instagram.com/cartoongiftsbulgaria/?hl=en" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </footer>
    );
};

export default FooterFive;