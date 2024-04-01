import React from 'react';
import hero_banner_image from '@assets/images/banner/hero_banner_image_4.png'
import hero_image_4 from '@assets/images/banner/hero_banner_image_4.png'
import shape_circle_1 from '@assets/images/shapes/shape_circle_2.svg'
import shape_triangle_1 from '@assets/images/shapes/shape_triangle_1.svg'
import shape_triangle_2 from '@assets/images/shapes/shape_triangle_2.svg'
import banner_avatar from '@assets/images/banner/banner_avatar_img_1.png'
import banner_avatar_1 from '@assets/images/banner/banner_avatar_img_2.png'
import banner_avater_2 from '@assets/images/banner/banner_avatar_img_3.png'
import shape_hand from '@assets/images/shapes/shape_hand.png'
import shape_banner_1 from '@assets/images/banner/shape_banner_1.svg'


import Image from 'next/image';

const HeroSectionFour = () => {
  return (
    <section className="hero_banner_section style_4 bg_light_3 decoration_wrap">
      <div className="banner_bg_4" style={{ backgroundImage: `url(${shape_banner_1.src})` }}></div>
      <div className="banner_bg_sm d-lg-none ">
        <div className="banner_bg_shape">
          <Image src={hero_banner_image} style={{ width: "100%", height: "100%" }} alt="shape_banner_10" />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-6 order-last">
            <div className="hero_banner_image decoration_wrap">
              <div className="rocket_image wow fadeInUp" data-wow-delay=".2s">
                <Image src={hero_image_4} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
              </div>
              <div className="deco_item shape_1">
                <Image className="wow zoomIn" data-wow-delay=".4s" src={shape_circle_1} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
              </div>
              <div className="deco_item shape_2" data-parallax='{"y" : 200, "smoothness": 10}'>
                <Image className="wow zoomIn" data-wow-delay=".2s" src={shape_triangle_1} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
              </div>
              <div className="deco_item shape_3" data-parallax='{"y" : -200, "smoothness": 10}'>
                <Image className="wow zoomIn" data-wow-delay=".2s" src={shape_triangle_2} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
              </div>
              <ul className="deco_item shape_4 unordered_list_block">
                <li>
                  <Image className="wow fadeInUp" data-wow-delay=".2s" src={banner_avatar} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
                </li>
                <li>
                  <Image className="wow fadeInUp" data-wow-delay=".4s" src={banner_avatar_1} style={{ width: "auto", height: "auto" }} alt="Paradox Illustration Image" />
                </li>
                <li>
                  <Image className="wow fadeInUp" data-wow-delay=".6s" src={banner_avater_2} style={{ width: "auto", height: "auto" }} alt="Paradox Illustration Image" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-xl-6 col-lg-6">
            <div className="banner_content_4">
              <h1 className="hero_banner_heading">
                The <span className="focus_text">#1</span> Digital Marketing Agency
                for Startup
              </h1>
              <p>
                Digital agencies are strategic and creative marketing agencies focused on user experience, mobile, social, data gathering and analytics apart from providing services.
              </p>
              <div className="form-group m-0 subscribe_form">
                <label htmlFor="input_email_1" className="form-label">
                  <i className="fas fa-envelope"></i>
                </label>
                <input id="input_email_1" className="form-control" type="email" name="email" placeholder="Enter your Email Address" />
                <button type="submit" className="bd-btn-link btn_primary">
                  <span className="bd-button-content-wrapper">
                    <span className="bd-button-icon">
                      <i className="fa-light fa-arrow-right-long"></i>
                    </span>
                    <span className="pd-animation-flip">
                      <span className="bd-btn-anim-wrapp">
                        <span className="bd-button-text">Work with Us</span>
                        <span className="bd-button-text">Work with Us</span>
                      </span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="deco_item shape_5">
        <Image className="wow fadeInUp" data-wow-delay=".4s" src={shape_circle_1} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
      </div>
      <div className="deco_item shape_6">
        <img className="wow fadeInUp" data-wow-delay=".4s" src="/assets/images/shapes/shape_hand.png" alt="Paradox Illustration Image"/>
      </div>
    </section>
  );
};

export default HeroSectionFour;