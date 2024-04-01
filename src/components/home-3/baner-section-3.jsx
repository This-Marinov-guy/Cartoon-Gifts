import Link from 'next/link';
import React from 'react';
import hero_banner_image from '@assets/images/banner/hero_banner_image_3.png'
import shape_star_smooth from '@assets/images/shapes/shape_star_smooth.svg'
import Image from 'next/image';
const BanerSectionThire = () => {
  return (
    <section className="hero_banner_section style_3 bg_primary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-xxl-7 col-xl-6 col-lg-6">
            <div className="banner_content_3 mb-4 mb-lg-0">
              <h1 className="hero_banner_heading">
                Start your new <span>Business</span> with a Great Idea
              </h1>
              <Link href="/pricing" className="bd-btn-link btn_warning">
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
            </div>
          </div>
          <div className="col col-xxl-5 col-xl-6 col-lg-6">
            <div className="hero_banner_image_3 decoration_wrap">
              <div className="man_image wow fadeInUp" data-wow-delay=".4s">
                <Image src={hero_banner_image} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
              </div>
              <div className="deco_item shape_1">
                <Image className="wow zoomIn" data-wow-delay=".2s" src={shape_star_smooth} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanerSectionThire;