import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import about_image_1 from '@assets/images/about/about_image_1.png'
import shape_circle_2 from '@assets/images/shapes/shape_circle_2.svg';
import ModalVideo from 'react-modal-video';

import icon_development from "@assets/images/icons/icon_development.svg";
import icon_flexibility from "@assets/images/icons/icon_flexibility.svg";
import icon_design from "@assets/images/icons/icon_design.svg";
import icon_maintenance from "@assets/images/icons/icon_maintenance.svg";

const about_data = [
  // home-4 about-data
  {
    id: 1,
    img: icon_development,
    title: "Fast Development",
    description: "We can launch a small site less then a week.",
  },
  {
    id: 2,
    img: icon_flexibility,
    title: "Full Flexibility",
    description: " Multiple development tools help us create.",
  },
  {
    id: 3,
    img: icon_design,
    title: "Modern Design",
    description: "Most modern approaches to any design.",
  },
  {
    id: 4,
    img: icon_maintenance,
    title: "Simple Maintenance",
    description: "Multiple development tools help us create.",
  },
];

const AboutSectionFour = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);


  return (
    <>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setIsOpen(false)} />
      <section className="about_section section_space_lg decoration_wrap bg_light_3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-5 col-xl-6">
              <div className="about_image decoration_wrap mb-4 mb-lg-0 text-center">
                <Image className="wow fadeInLeft amin-up-down" data-wow-delay=".1s" src={about_image_1} style={{ width: "100%", height: "100%" }} alt="Paradox - About Image" />
                <div className="deco_item shape_1">
                  <Image className="wow zoomIn" data-wow-delay=".1s" src={shape_circle_2} style={{ width: "100%", height: "100%" }} alt="Paradox - Shape Image" />
                </div>
              </div>
            </div>
            <div className="col col-lg-7 col-xl-6">
              <div className="about_content">
                <div className="section_heading">
                  <h2 className="heading_subtitle">
                    <span className="double_icon">
                      <i className="fas fa-sharp fa-square-full"></i>
                      <i className="fas fa-sharp fa-square-full"></i>
                    </span>
                    <span>Why Chose Us</span>
                  </h2>
                  <h3 className="heading_title mb-0">
                    We are Moving to a Higher & Better Stage.
                  </h3>
                </div>
                <div className="row mb-4">
                  {
                    about_data.slice(0, 4).map((item) => (
                      <div className="col col-lg-6 col-md-6" key={item.id}>
                        <div className="iconbox_item policy_item icon_align_left p-0 rounded-0 border-0 bg-transparent">
                          <div className="item_icon">
                            <Image src={item.img} style={{ width: "auto", height: "auto" }} alt="Paradox Icon Eye White" />
                          </div>
                          <div className="item_content">
                            <h3 className="item_title">{item.title}</h3>
                            <p className="mb-0">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <ul className="btns_group unordered_list">
                  <li>
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
        </div>
      </section>
    </>
  );
};

export default AboutSectionFour;