import Link from 'next/link';
import React from 'react';
import cta_image_2 from '@assets/images/calltoaction/cta_image_2.png';
import shape_circle_4 from '@assets/images/shapes/shape_circle_half_4.svg';
import shape_circle_5 from '@assets/images/shapes/shape_circle_5.svg';
import shape_circle_dashed_3 from '@assets/images/shapes/shape_circle_dashed_3.png';
import shape_box_1 from '@assets/images/shapes/shape_box_1.png';
import shape_box_2 from '@assets/images/shapes/shape_box_2.png';
import site_logo from '@assets/images/logo/site_logo_dark_2.svg';
import Image from 'next/image';



const FooterTwo = () => {
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
    return (
        <footer className="site_footer style_2">
        <div className="calltoaction_section style_2 bg_danger decoration_wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col col-lg-6 order-last">
                <div className="cta_image decoration_wrap text-center">
                  <div className="man_image">
                    <Image src={cta_image_2} style={{ width: "100%", height: "100%" }} alt="Paradox Call To Action Image" />
                  </div>
                  <div className="deco_item shape_1">
                    <Image src={shape_circle_4} style={{ width: "100%", height: "100%" }} alt="Paradox Shape Image" />
                  </div>
                </div>
              </div>
              <div className="col col-lg-6">
                <div className="cta_content_2 mb-4 mb-lg-0">
                  <div className="section_heading text-white">
                    <h2 className="heading_title">
                      Ready to Go?
                    </h2>
                    <p className="heading_description mb-0">
                      Find out how to get started with Paradox
                    </p>
                  </div>
                  <Link href="/pricing" className="bd-btn-link btn_dark">
                    <span className="bd-button-content-wrapper">
                       <span className="bd-button-icon">
                        <i className="fa-light fa-arrow-right-long"></i>
                       </span>
                       <span className="pd-animation-flip">
                          <span className="bd-btn-anim-wrapp">
                             <span className="bd-button-text">Get started</span>
                             <span className="bd-button-text">Get started</span>
                          </span>
                       </span> 
                    </span>
                 </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="deco_item shape_2 wow fadeInUp" data-wow-delay=".3s">
            <Image src={shape_circle_5} style={{ width: "100%", height: "100%" }} alt="Paradox Shape Image" />
          </div>
          <div className="deco_item shape_3 wow fadeInDown" data-wow-delay=".3s">
            <Image src={shape_circle_5} style={{ width: "100%", height: "100%" }} alt="Paradox Shape Image" />
          </div>
          <div className="deco_item shape_4">
            <Image src={shape_circle_dashed_3} style={{ width: "100%", height: "100%" }} alt="Paradox Shape Image" />
          </div>
          <div className="deco_item shape_5">
            <Image src={shape_circle_dashed_3} style={{ width: "100%", height: "100%" }} alt="Paradox Shape Image" />
          </div>
          <div className="deco_item shape_6 wow fadeInDown" data-wow-delay=".2s">
            <Image src={shape_box_1} style={{ width: "100%", height: "100%" }} alt="Paradox Shape Image" />
          </div>
          <div className="deco_item shape_7 wow fadeInLeft" data-wow-delay=".4s">
            <Image src={shape_box_2} style={{ width: "100%", height: "100%" }} alt="Paradox Shape Image" />
          </div>
          <div className="deco_item shape_8 wow fadeInUp" data-wow-delay=".5s">
            <Image src={shape_box_2} style={{ width: "100%", height: "100%" }} alt="Paradox Shape Image" />
          </div>
        </div>
        <div className="footer_widget_area">
          <div className="container">
            <div className="row justify-content-lg-between">
              <div className="col col-xl-4 col-md-6">
                <div className="site_logo">
                     <Link className="site_link" href="/home-2">
                    <Image src={site_logo} style={{ width: "100%", height: "100%" }} alt="Site Logo - Paradox - Agency Template" />
                  </Link>
                </div>
                <p>
                  Our action plan is focused and planned. We are result oriented organization
                </p>
                <div className="social_wrap d-block">
                  <h3 className="social_title">Follow Me on :</h3>
                  <ul className="social_icon unordered_list">
                    <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link href="https://www.behance.net/" target="_blank"><i className="fab fa-behance"></i></Link></li>
                    <li><Link href="https://dribbble.com/" target="_blank"><i className="fab fa-dribbble"></i></Link></li>
                  </ul>
                </div>
              </div>
              <div className="col col-xl-4 col-md-6">
                <div className="footer_widget">
                  <h3 className="footer_widget_title">Newsletter</h3>
                  <form action="#">
                    <div className="small_newsletter_form style_2">
                      <label className="input_icon" htmlFor="input_newsletter"><i className="fas fa-envelope"></i></label>
                      <input id="input_newsletter" type="email" placeholder="Email Adreess"/>
                      <button type="submit">
                        <i className="far fa-arrow-right"></i>
                      </button>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" id="checkMeOutt" />
                      <label htmlFor="checkMeOutt">I accept with this Condition</label>
                    </div>
                  </form>
                  
                  <div className="icon_list_widget">
                    <h4 className="widget_title mb-0">
                      Email Me:
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
            <div className="copyright_widget text-center copyright_space">
              Copyright © 2023 by <Link target="_blank" href="https://themeforest.net/user/bdevs/portfolio"><u>Bdevs</u></Link> All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    );
};

export default FooterTwo;