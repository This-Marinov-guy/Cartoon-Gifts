import Link from 'next/link';
import React, { useState } from 'react';
import shape_circle_2 from '@assets/images/shapes/shape_circle_2.svg'
import icon_team_white from '@assets/images/icons/icon_team_white.svg'
import icon_comment_white from '@assets/images/icons/icon_comment_white.svg'
import icon_medal_white from '@assets/images/icons/icon_medal_white.svg'
import shape_circle_dashed from '@assets/images/shapes/shape_circle_dashed_1.svg'
import shape_circle_1 from '@assets/images/shapes/shape_circle_1.svg'
import shape_close_icon from '@assets/images/shapes/shape_close_icon.png'
import Image from 'next/image';
import ModalVideo from 'react-modal-video';


const StarterStepsSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);


  return (
    <>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setIsOpen(false)} />
      <section className="starter_steps_section section_space_lg">
        <div className="deco_item shado">
          <Image src={shape_circle_2} style={{ width: "100%", height: "auto" }} alt="Paradox Shape" />
        </div>
        <div className="container decoration_wrap">
          <div className="row align-items-center">
            <div className="col col-lg-6">
              <div className="starter_steps_group decoration_wrap mb-4 mb-lg-0">
                <ul className="unordered_list">
                  <li>
                    <div className="content_wrap wow bounceIn" data-wow-delay=".1s">
                      <div className="item_icon">
                        <Image src={icon_team_white} style={{ width: "100%", height: "auto" }} alt="Paradox Icon Team" />
                      </div>
                      <h3 className="item_title m-0">World-class Team</h3>
                    </div>
                  </li>
                  <li>
                    <div className="content_wrap wow bounceIn" data-wow-delay=".2s">
                      <div className="item_icon">
                        <Image src={icon_comment_white} style={{ width: "100%", height: "auto" }} alt="Paradox Icon Comment" />
                      </div>
                      <h3 className="item_title m-0">Quickly Response</h3>
                    </div>
                  </li>
                  <li>
                    <div className="content_wrap wow bounceIn" data-wow-delay=".3s">
                      <div className="item_icon">
                        <Image src={icon_medal_white} style={{ width: "100%", height: "auto" }} alt="Paradox Icon Medal" />
                      </div>
                      <h3 className="item_title m-0">Satisfaction Guarantee</h3>
                    </div>
                  </li>
                </ul>
                <div className="deco_item shape_1">
                  <Image src={shape_circle_dashed} style={{ width: "100%", height: "auto" }} alt="Paradox Shape" />
                </div>
                <div className="deco_item shape_2">
                  <Image src={shape_circle_2} style={{ width: "100%", height: "auto" }} alt="Paradox Shape" />
                </div>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="steps_content_wrapper">
                <div className="section_heading mb-5 style_4">
                  <h2 className="heading_subtitle text-uppercase">
                    <span>Why Chose Us</span>
                  </h2>
                  <h3 className="heading_title">
                    Revolutionary Step for your Business
                  </h3>
                  <p className="heading_description mb-0">
                    Our action plan is focused and planned. We are result oriented organization and are committed to invest in initiatives for newer expanded customer relationship. We always strive to enhance productivity and improve
                  </p>
                </div>
                <ul className="btns_group unordered_list">
                  <li>
                    <Link href="/service" className="bd-btn-link btn_primary">
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
                  </li>
                  <li>
                    <button type='button' className="video_play_btn popup_video" onClick={() => { openVideoModal(); }}>
                      <span id="intro_vbtn" className="icon_wrap">
                        <i className="fas fa-play"></i>
                      </span>
                      <span className="btn_text"><small className="d-block">Watch Our</small> Video</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="deco_item shape_3 wow fadeInUp" data-wow-delay=".1s">
            <Image data-parallax='{"y" : -140, "smoothness": 10}' src={shape_circle_1} style={{ width: "100%", height: "auto" }} alt="Paradox Shape Circle" />
          </div>
          <div className="deco_item shape_4 wow fadeInDown" data-wow-delay=".1s">
            <Image data-parallax='{"y" : 140, "smoothness": 10}' src={shape_close_icon} style={{ width: "100%", height: "auto" }} alt="Paradox Shape Close" />
          </div>
        </div>
        <div className="deco_item shape_1"></div>
      </section>
    </>
  );
};

export default StarterStepsSection;