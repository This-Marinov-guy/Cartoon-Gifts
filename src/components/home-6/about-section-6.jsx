import React from 'react';
import about_image from '@assets/images/about/about_image_11.png'
import icon_eye_primary from '@assets/images/icons/icon_eye_primary.svg'
import icon_dart_board from '@assets/images/icons/icon_dart_board_primary.svg'
import shape_close_icon from '@assets/images/shapes/shape_close_icon.png'
import Image from 'next/image';

const AboutSectionSix = () => {
  return (
    <section className="about_section section_space_lg pb-0 decoration_wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-6 order-lg-last">
            <div className="about_image_3 mb-4 mb-lg-0">
              <Image className="wow fadeInUp" data-wow-delay=".1s" src={about_image} style={{ width: "100%", height: "100%" }} alt="Paradox - About Image" />
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="about_content">
              <div className="section_heading style_4">
                <h2 className="heading_subtitle text-uppercase">
                  <span>About paradox</span>
                </h2>
                <h3 className="heading_title">
                  We Can do Every Single IT Solution together
                </h3>
                <p className="heading_description mb-0">
                  Our action plan is focused and planned. We are result oriented organization and are committed to invest in initiatives for newer expanded Our action plan is focused and planned. We are result oriented organization
                </p>
              </div>
              <div className="mission_vision row">
                <div className="col col-md-6">
                  <div className="iconbox_item">
                    <div className="item_icon">
                      <Image src={icon_eye_primary} style={{ width: "auto", height: "auto" }} alt="Paradox Icon Eye White" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Our Vision</h3>
                      <p className="mb-0">
                        We are help  generate positive the cash floinvest
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className="iconbox_item">
                    <div className="item_icon">
                      <Image src={icon_dart_board} style={{ width: "auto", height: "auto" }} alt="Paradox Icon Eye White" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Our Mission</h3>
                      <p className="mb-0">
                        We are help  generate positive the cash floinvest
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="deco_item shape_6" data-parallax='{"y" : 200, "smoothness": 20}'>
        <Image src={shape_close_icon} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
      </div>
    </section>
  );
};

export default AboutSectionSix;