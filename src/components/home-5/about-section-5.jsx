import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import about_image from '@assets/images/about/about_image_5.jpg'
import about_image_2 from '@assets/images/about/about_image_6.jpg'
import shape_4 from '@assets/images/shapes/shape_4.svg'
import shape_circle_3 from '@assets/images/shapes/shape_circle_3.svg'
import shape_circle_4 from '@assets/images/shapes/shape_circle_2.svg'
import about_overlay from '@assets/images/about/about_image_7.jpg'


const AboutSectionFive = () => {

  return (
    <section className="about_section section_space_lg decoration_wrap bg_light_3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-6">
            <div className="about_image_2 decoration_wrap">
              <div className="image_wrap">
                <Image className="wow fadeInLeft" data-wow-delay=".6s" src={about_image} style={{ width: "100%", height: "100%" }} alt="Paradox - About Image" />
              </div>
              <div className="deco_item bg_image">
                <Image className="wow fadeInLeft" data-wow-delay=".6s" src={about_image_2} style={{ width: "100%", height: "100%" }} alt="Paradox - Shape Image" />
              </div>
              <div className="deco_item shape_3">
                <Image data-parallax='{"y" : 100, "smoothness": 20}' src={shape_4} style={{ width: "100%", height: "100%" }} alt="Paradox - Shape Image" />
              </div>
              <div className="experience_year wow fadeInUp" data-wow-delay=".2s" style={{ backgroundImage: `url(${about_overlay.src})` }}>
                <h3 className="experience_value">
                  <span>25</span>
                  <sup>+</sup>
                </h3>
                <p className="mb-0">
                  Years Experience In Business Consultancy
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="about_content">
              <div className="section_heading style_3">
                <h2 className="heading_subtitle">
                  <span>About Us</span>
                </h2>
                <h3 className="heading_title">
                  Welcome to Paradox for Business Consulting
                </h3>
                <p className="heading_description mb-0">
                  Our action plan is focused and planned. We are result oriented organization and are committed to invest in initiatives for newer expanded
                </p>
              </div>
              <div className="progress_item">
                <h4 className="item_title">Investment Planning</h4>
                <div className="progress">
                  <div className="progress_bar rx_width_84 wow animated" role="progressbar" data-wow-duration="1s" data-wow-delay=".4s" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <span className="value_text">84%</span>
                  </div>
                </div>
              </div>
              <div className="progress_item mb-0">
                <h4 className="item_title">Online Consulting</h4>
                <div className="progress">
                  <div className="progress_bar rx_width_93 wow animated" role="progressbar" data-wow-duration="1s" data-wow-delay=".4s" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <span className="value_text">93%</span>
                  </div>
                </div>
              </div>
              <div className="btn_wrap pb-0">
                <Link href="/about" className="bd-btn-link btn_primary">
                  <span className="bd-button-content-wrapper">
                    <span className="bd-button-icon">
                      <i className="fa-light fa-arrow-right-long"></i>
                    </span>
                    <span className="pd-animation-flip">
                      <span className="bd-btn-anim-wrapp">
                        <span className="bd-button-text">Know More</span>
                        <span className="bd-button-text">Know More</span>
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="deco_item shape_4">
        <Image src={shape_circle_4} style={{ width: "100%", height: "100%" }} alt="Paradox - Shape Image" />
      </div>
      <div className="deco_item shape_5">
        <Image src={shape_circle_3} style={{ width: "100%", height: "100%" }} alt="Paradox - Shape Image" />
      </div>
      <div className="deco_dot"></div>
    </section>
  );
};

export default AboutSectionFive;