import Link from 'next/link';
import React, { useState } from 'react';
import about_image from '@assets/images/about/about_image_3.png';
import shape_circle from '@assets/images/shapes/shape_circle_6.svg';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';

const AboutThere = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);

    return (
        <>
            <ModalVideo channel='youtube' autoplay
                isOpen={isOpen}
                videoId="L61p2uyiMSo"
                onClose={
                    () => setIsOpen(false)
                } />
            <section className="about_section section_space_lg decoration_wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-6">
                            <div className="about_image decoration_wrap mb-4 mb-lg-0 text-center">
                                <Image src={shape_circle}
                                    style={
                                        {
                                            width: "100%",
                                            height: "100%"
                                        }
                                    }
                                    alt="Paradox - Shape Image" />
                                <div className="deco_item shape_3">
                                    <Image className="wow fadeInUp amin-up-down" data-wow-delay=".1s"
                                        src={about_image}
                                        style={
                                            {
                                                width: "100%",
                                                height: "100%"
                                            }
                                        }
                                        alt="Paradox - About Image" />
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-6">
                            <div className="about_content_3">
                                <div className="section_heading mb-0">
                                    <h2 className="heading_subtitle text-uppercase">
                                        <span className="double_icon">
                                            <i className="fas fa-sharp fa-square-full"></i>
                                            <i className="fas fa-sharp fa-square-full"></i>
                                        </span>
                                        <span>Our Progress</span>
                                    </h2>
                                    <h3 className="heading_title">
                                        We are Moving to a Higher & Better Stage.
                                    </h3>
                                    <p className="heading_description mb-0">
                                        Our action plan is focused and planned. We are result oriented organization and are committed to invest in initiatives for newer expanded
                                    </p>
                                </div>
                                <div className="funfact_box_2">
                                    <div className="funfact_item">
                                        <div className="counter_value">2K+</div>
                                        <h3 className="counter_title mb-0">Happy Client</h3>
                                    </div>
                                    <div className="funfact_item">
                                        <div className="counter_value">1K+</div>
                                        <h3 className="counter_title mb-0">Completed Project</h3>
                                    </div>
                                    <div className="funfact_item">
                                        <div className="counter_value">100%</div>
                                        <h3 className="counter_title mb-0">Client Satisfaction</h3>
                                    </div>
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
                                        <button type='button' className="video_play_btn popup_video"
                                            onClick={
                                                () => {
                                                    openVideoModal();
                                                }
                                            }>
                                            <span id="intro_vbtn" className="icon_wrap">
                                                <i className="fas fa-play"></i>
                                            </span>
                                            <span className="btn_text">
                                                <small className="d-block">Watch Our</small>
                                                Video</span>
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

export default AboutThere;
