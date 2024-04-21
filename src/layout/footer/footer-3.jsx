import Link from 'next/link';
import React from 'react';
import cta_image_3 from '@assets/images/calltoaction/cta_image_3.png'
import flag_usite_logo_white from '@assets/images/logo/logo-title-dark.png'
import Image from 'next/image';
import flags_data from '@data/flags-data';

import flags_overlay from '@assets/images/shapes/vactor_map.svg'


const SiteFooterThire = () => {
    return (
        <footer className="site_footer style_3">
        <div className="calltoaction_section style_3 section_space_lg bg_primary text-center decoration_wrap">
          <div className="overlay"></div>
          <div className="container">Company
            <div className="deco_item cta_image">
              <Image src={cta_image_3} style={{ width: "100%", height: "100%" }} alt="Paradox Call To Action Image" />
            </div>
            <div className="section_heading text-white">
              <h2 className="heading_title">
                Ready to Go?
              </h2>
              <p className="heading_description mb-0">
                Find out how to get started with Paradox
              </p>
            </div>
            <Link href="/pricing" className="bd-btn-link btn_warning">
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
        <div className="agency_branch_countries bg_dark_3" style={{ backgroundImage: `url(${flags_overlay.src})`}}>
          <div className="container">
            <div className="row">
              {
                flags_data.slice(0, 4).map((item) => (
             <div className="col col-lg-3" key={item.id}>
                            <div className="iconbox_item icon_align_left">
                              <div className="item_icon">
                                <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="Paradox - Flag Denmark" />
                              </div>
                              <div className="item_content">
                                <p className="mb-0">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div> 
                  ))}
            </div>
          </div>
        </div>
        <div className="footer_widget_area bg_dark_3">
          <div className="container">
            <div className="row justify-content-lg-between">
              <div className="col col-lg-4 col-md-6">
                <div className="footer_widget pe-lg-5">
                  <div className="site_logo">
                       <Link className="site_link" href="/">
                      <Image src={flag_usite_logo_white} style={{ width: "100%", height: "100%" }} alt="Site Logo - Paradox - Agency Template" />
                    </Link>
                  </div>
                  <p>
                    Our action plan is focused and planned. We are result oriented organization
                  </p>
                  <Link href="/about" className="bd-btn-link btn_warning">
                    <span className="bd-button-content-wrapper">
                       <span className="bd-button-icon">
                        <i className="fa-light fa-arrow-right-long"></i>
                       </span>
                       <span className="pd-animation-flip">
                          <span className="bd-btn-anim-wrapp">
                             <span className="bd-button-text">Learn More</span>
                             <span className="bd-button-text">Learn More</span>
                          </span>
                       </span> 
                    </span>
                 </Link>
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
                  <h3 className="footer_widget_title text-white">Follow Us</h3>
                  <ul className="social_icon unordered_list">
                    <li><Link href="https://www.facebook.com/cartoongiftsbulgaria1/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link href="https://www.behance.net/" target="_blank"><i className="fab fa-behance"></i></Link></li>
                    <li><Link href="https://dribbble.com/" target="_blank"><i className="fab fa-dribbble"></i></Link></li>
                  </ul>
                  <div className="icon_list_widget">
                    <h4 className="widget_title mb-0">
                      Email Us:
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

export default SiteFooterThire;