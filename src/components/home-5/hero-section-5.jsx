import Link from 'next/link';
import React, { useState } from 'react';
import hero_banner from '@assets/images/banner/hero_banner_image_5.png'
import hero_banner_2 from '@assets/images/banner/hero_banner_image_6.png'
import shape_5 from '@assets/images/shapes/shape_5.svg'
import shape_6 from '@assets/images/shapes/shape_4.svg'
import shape_circle_2 from '@assets/images/shapes/shape_circle_2.svg'
import shape_circle_3 from '@assets/images/shapes/shape_circle_3.svg'

import Image from 'next/image';
import ModalVideo from 'react-modal-video';

const HeroSectionFive = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="hero_banner_section style_5 bg_light_3 decoration_wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-6">
              <div className="banner_comntent_5 mt-5 mb-4 mb-lg-0 mt-lg-0">
                <h1 className="hero_banner_heading">
                  <span className="focus_text">Start Consulting <small>Here</small></span>
                  <span className="d-block">Clear Thinking Makes a Bright Future</span>
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
                    <button type='submit' className="video_play_btn popup_video" onClick={() => { openVideoModal(); }}>
                      <span id="intro_vbtn" className="icon_wrap">
                        <i className="fas fa-play"></i>
                      </span>
                      <span className="btn_text"><small className="d-block">Watch Our</small> Video</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="hero_banner_image decoration_wrap">
                <div className="man_image">
                  <Image className="wow fadeInRight" data-wow-delay=".2s" src={hero_banner} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
                </div>
                <div className="deco_item analyse_image">
                  <Image className="wow fadeInUp" data-wow-delay=".4s" src={hero_banner_2} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
                </div>
                <div className="deco_item shape_1">
                  <Image className="wow fadeInLeft" data-wow-delay=".6s" style={{ width: "100%", height: "100%" }} src={shape_5} alt="Paradox Blog Image" />
                </div>
                <div className="deco_item shape_2">
                  <Image className="wow fadeInRight" data-wow-delay=".7s" style={{ width: "100%", height: "100%" }} src={shape_6} alt="Paradox Illustration Image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="deco_item color_shadow_1">
          <Image className="wow fadeInRight" data-wow-delay=".7s" src={shape_circle_2} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
        </div>
        <div className="deco_item color_shadow_2">
          <Image className="wow fadeInRight" data-wow-delay=".7s" src={shape_circle_2} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
        </div>
        <div className="deco_item color_shadow_3">
          <Image className="wow fadeInRight" data-wow-delay=".7s" src={shape_circle_3} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
        </div>
      </section>

      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setIsOpen(false)} />
    </>
  );
};

export default HeroSectionFive;