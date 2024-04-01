import Link from 'next/link';
import React from 'react';
import hero_banner_img from '@assets/images/banner/hero_banner_image_7.png'
import shape_banner_1 from '@assets/images/banner/shape_banner_2.svg'
import shape_banner_2 from '@assets/images/banner/shape_banner_3.svg'
import shape_banner_3 from '@assets/images/shapes/shape_close_icon.png'
import shape_circle_1 from '@assets/images/shapes/shape_circle_1.svg'
import Image from 'next/image';



const HeroSectionSix = () => {
  return (
    <section className="hero_banner_section style_6 decoration_wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-6 order-lg-last">
            <div className="banner_content_6 mb-5 mb-lg-0">
              <h1 className="hero_banner_heading">
                <span className="small_title">Best IT Business In 2023</span>
                <span className="d-block">Thinking For The Essentials For The <span className="focus_text">Next Level</span></span>
              </h1>
              <ul className="btns_group unordered_list">
                <li>
                  <Link href="/contact" className="bd-btn-link btn_primary">
                    <span className="bd-button-content-wrapper">
                      <span className="bd-button-icon">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </span>
                      <span className="pd-animation-flip">
                        <span className="bd-btn-anim-wrapp">
                          <span className="bd-button-text">Start Cooperation</span>
                          <span className="bd-button-text">Start Cooperation</span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="bd-btn-link outline-dark">
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
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="hero_banner_image wow fadeInUp" data-wow-delay=".2s">
              <Image src={hero_banner_img} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
            </div>
          </div>
        </div>
      </div>

      <div className="deco_item shape_1">
        <Image src={shape_banner_1} alt="Paradox Illustration Image" />
      </div>
      <div className="deco_item shape_2 wow fadeInUp" data-wow-delay=".2s">
        <Image src={shape_banner_2} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
      </div>
      <div className="deco_item shape_3 wow fadeInUp" data-wow-delay=".4s">
        <Image src={shape_banner_3} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
      </div>
      <div className="deco_item shape_4 wow fadeInUp" data-wow-delay=".6s">
        <Image src={shape_circle_1} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
      </div>
    </section>
  );
};

export default HeroSectionSix;