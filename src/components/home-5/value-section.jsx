import React from 'react';
import about_image_1 from '@assets/images/about/about_image_9.jpg';
import about_image_2 from '@assets/images/about/about_image_6.jpg';
import shape_circle_1 from '@assets/images/shapes/shape_6.svg';
import shape_circle_2 from '@assets/images/shapes/shape_circle_7.svg';
import shape_circle_3 from '@assets/images/shapes/shape_circle_2.svg';
import about_image from '@assets/images/about/about_image_9.jpg';
import about_image_10 from '@assets/images/about/about_image_10.jpg';
import icon_love from '@assets/images/icons/icon_love_handshake.svg';
import icon_users from '@assets/images/icons/icon_users.svg';
import Image from 'next/image';
import Link from 'next/link';





const ValueSection = () => {
  return (
    <section className="our_value_section section_space_lg pb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-6 order-lg-last">
            <div className="our_value_image decoration_wrap mb-5 mb-lg-0">
              <div className="image_wrap">
                <Image src={about_image_1} style={{ width: "100%", height: "100%" }} alt="Paradox - About Image" />
              </div>
              <div className="deco_item bg_image">
                <Image src={about_image_2} style={{ width: "100%", height: "100%" }} alt="Paradox - Shape Image" />
              </div>
              <div className="deco_item shape_1">
                <Image data-parallax='{"y" : 100, "smoothness": 20}' style={{ width: "100%", height: "100%" }} src={shape_circle_1} alt="Paradox - Shape Image" />
              </div>
              <div className="deco_item shape_2">
                <Image data-parallax='{"y" : -150, "smoothness": 20}' src={shape_circle_2} style={{ width: "100%", height: "100%" }} alt="Paradox - Shape Image" />
              </div>
              <div className="deco_item shape_3">
                <Image src={shape_circle_3} style={{ width: "100%", height: "100%" }} alt="Paradox - Shape Image" />
              </div>
              <div className="deco_item chart_image">
                <Image src={about_image_10} style={{ width: "100%", height: "100%" }} alt="Paradox - Shape Image" />
              </div>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="content_wrap">
              <div className="section_heading style_3">
                <h2 className="heading_subtitle">
                  <span>Our Values</span>
                </h2>
                <h3 className="heading_title mb-0">
                  Clear Thinking Makes a Bright Future
                </h3>
              </div>
              <div className="our_value_iconbox row">
                <div className="col col-md-6">
                  <div className="iconbox_item pe-lg-3 pe-xl-5">
                    <div className="item_icon">
                      <Image src={icon_users} style={{ width: "50%", height: "auto" }} alt="Paradox Icon Users" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">User Friendly</h3>
                      <p className="mb-0">
                        Focused and planned. We are result oriented organize and are committee to invest
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className="iconbox_item pe-lg-3 pe-xl-5">
                    <div className="item_icon">
                      <Image src={icon_love} style={{ width: "50%", height: "auto" }} alt="Paradox Icon Handshake" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Best Support</h3>
                      <p className="mb-0">
                        Focused and planned. We are result oriented organize and are committee to invest
                      </p>
                    </div>
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
    </section>
  );
};

export default ValueSection;