import React from 'react';
import shape_9 from '@assets/images/shapes/shape_9.svg'
import site_logo_dark from '@assets/images/logo/site_logo_dark.svg'
import Image from 'next/image';
import Link from 'next/link';

const FooterSix = () => {
  return (
    <footer className="site_footer style_5 mt-4">
      <div className="calltoaction_section style_5">
        <div className="container">
          <div className="content_box bg_primary decoration_wrap text-center">
            <div className="row justify-content-center">
              <div className="col col-lg-7">
                <div className="section_heading text-white">
                  <h2 className="heading_title mb-0">
                    Celebrate an occasion with us.
                  </h2>
                </div>
                <Link href="/order" className="bd-btn-link btn_warning">
                  <span className="bd-button-content-wrapper">
                    <span className="bd-button-icon">
                      <i className="fa-light fa-arrow-right-long"></i>
                    </span>
                    <span className="pd-animation-flip">
                      <span className="bd-btn-anim-wrapp">
                        <span className="bd-button-text">Make an order</span>
                        <span className="bd-button-text">Order now</span>
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="deco_item shape_2">
              <Image className="wow fadeInUp" style={{ width: "100%", height: "auto" }} data-wow-delay=".2s" src={shape_9} alt="Paradox Illustration Image" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_widget_area">
        <div className="container">
          <div className="row justify-content-lg-between">
            <div className="col col-lg-4">
              <div className="footer_widget mb-4 mb-lg-0">
                <div className="site_logo">
                  <Link className="site_link" href="/">
                    <Image className="wow fadeInUp" data-wow-delay=".2s" style={{ width: "100%", height: "auto" }} src={site_logo_dark} alt="Site Logo - Paradox - Agency Template" />
                  </Link>
                </div>
                <p>
                  Our goal is to make people happy through art
                </p>
                <div className="social_wrap d-block">
                  <h3 className="social_title">Follow Us on :</h3>
                  <ul className="social_icon unordered_list">
                    <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="https://instagram.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-4">
              <div className="footer_widget">
                <h3 className="footer_widget_title">Newsletter</h3>
                <form action="#">
                  <div className="small_newsletter_form style_2">
                    <label className="input_icon" htmlFor="input_newsletter"><i className="fas fa-envelope"></i></label>
                    <input id="input_newsletter" type="email" placeholder="Email Adreess" />
                    <button type="submit">
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" id="checkMeOut" />
                    <label htmlFor="checkMeOut">I accept with this Condition</label>
                  </div>
                </form>
                <div className="icon_list_widget">
                  <h4 className="widget_title mb-0">
                    Email Me:
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
            </div>
          </div>
          
          <div className="copyright_widget copyright_space text-center">
            Copyright © 2024 by Cartoon Gifts. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSix;