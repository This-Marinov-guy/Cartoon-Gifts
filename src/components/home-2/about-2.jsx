import Link from 'next/link';
import React from 'react';
import icon_laravel from '@assets/images/icons/icon_laravel.png';
import icon_elementor from '@assets/images/icons/icon_elementor.png';
import icon_figma from '@assets/images/icons/icon_figma.png';
import icon_adobe from '@assets/images/icons/icon_adobe_xd.png'
import about_image from '@assets/images/about/about_image_1.png';
import Image from 'next/image';

const AboutTwo = () => {
  return (
    <section className="about_section section_space_lg pb-0 decoration_wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-xl-6 col-lg-5">
            <div className="about_image decoration_wrap mb-4 mb-lg-0 text-center">
              <Image className="wow fadeInLeft amin-up-down" data-wow-delay=".1s" src={about_image} style={{ width: "100%", height: "100%" }} alt="Paradox - About Image" />
            </div>
          </div>
          <div className="col col-xl-6 col-lg-7">
            <div className="about_content">
              <div className="section_heading style_2">
                <h2 className="heading_subtitle">
                  <span>My Skill</span>
                </h2>
                <h3 className="heading_title">
                  I Can Design Anything You Want !
                </h3>
                <p className="heading_description mb-0">
                  Our action plan is focused and planned. We are result oriented organization and are committed to invest in initiatives for newer expanded customer relationship. We always strive to enhance productivity and improve
                </p>
              </div>
              <div className="skill_iconboxes row">
                <div className="col col-lg-3 col-md-3 col-sm-6 col-6">
                  <div className="iconbox_item">
                    <div className="item_icon">
                      <Image src={icon_adobe} style={{ width: "100%", height: "100%" }} alt="Icon Adobe XD" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title mb-0">Adobe Xd</h3>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-3 col-sm-6 col-6">
                  <div className="iconbox_item">
                    <div className="item_icon">
                      <Image src={icon_figma} style={{ width: "100%", height: "100%" }} alt="Icon Figma" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title mb-0">Figma</h3>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-3 col-sm-6 col-6">
                  <div className="iconbox_item">
                    <div className="item_icon">
                      <Image src={icon_elementor} style={{ width: "100%", height: "100%" }} alt="Icon Elementor" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title mb-0">Elementor</h3>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-3 col-md-3 col-sm-6 col-6">
                  <div className="iconbox_item">
                    <div className="item_icon">
                      <Image src={icon_laravel} style={{ width: "100%", height: "100%" }} alt="Icon laravel" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title mb-0">Laravel</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn_wrap pb-0">
                <Link href="/about-me" className="bd-btn-link btn_danger">
                  <span className="bd-button-content-wrapper">
                    <span className="bd-button-icon">
                      <i className="fa-light fa-arrow-right-long"></i>
                    </span>
                    <span className="pd-animation-flip">
                      <span className="bd-btn-anim-wrapp">
                        <span className="bd-button-text">View My CV</span>
                        <span className="bd-button-text">View My CV</span>
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;