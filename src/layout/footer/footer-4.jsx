import React from 'react';
import site_logo_white from '@assets/images/logo/logo-title-dark.png'
import Image from 'next/image';
import Link from 'next/link';


const FooterFour = () => {
    return (
    <footer className="site_footer style_3">
        <div className="footer_widget_area bg_dark_3">
          <div className="container">
            <div className="row justify-content-lg-between">
              <div className="col col-lg-4 col-md-6">
                <div className="footer_widget pe-lg-5">
                  <div className="site_logo">
                       <Link className="site_link" href="/">
                      <Image src={site_logo_white} style={{ width: "100%", height: "100%" }} alt="Site Logo - Paradox - Agency Template" />
                    </Link>
                  </div>
                  <p>
                    Our action plan is focused and planned. We are result oriented organization
                  </p>
                  <div className="social_wrap d-block">
                    <h3 className="social_title mb-2">Follow Us:</h3>
                    <ul className="social_icon unordered_list mb-0">
                    <li><Link href="https://www.facebook.com/cartoongiftsbulgaria1/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link href="https://www.instagram.com/cartoongiftsbulgaria/?hl=en" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link href="https://www.behance.net/" target="_blank"><i className="fab fa-behance"></i></Link></li>
                    <li><Link href="https://dribbble.com/" target="_blank"><i className="fab fa-dribbble"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-lg-2 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_widget_title text-white">Our Services</h3>
                  <ul className="page_list unordered_list_block">
                    <li>
                      <Link href="/service">
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">UI/UX Design</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">Website Design</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">Email Marketing</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">SEO Analysing</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">Digital Marketing</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col col-lg-2 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_widget_title text-white">Company</h3>
                  <ul className="page_list unordered_list_block">
                    <li>
                      <Link href="/about">
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">About Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team">
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">Our Team</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio">
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">Gallery</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">FAQ</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">Our Blog</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col col-lg-3 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_widget_title text-white">Newsletter</h3>
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
        <div className="footer_bottom bg_dark_2">
          <div className="container">
            <div className="copyright_widget">
              Copyright © 2023 by <Link target="_blank" href="https://themeforest.net/user/bdevs/portfolio"><u>Bdevs</u></Link> All Rights Reserved.
            </div>
            <ul className="page_list unordered_list">
              <li>
                <Link href="/terms-conditions">
                  <span className="list_item_text">Terms & Condition</span>
                </Link>
              </li>
              <li>
                <Link href="/policy-privacy">
                  <span className="list_item_icon">
                    <i className="fas fa-circle"></i>
                  </span>
                  <span className="list_item_text">Policy & Privacy</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
};

export default FooterFour;