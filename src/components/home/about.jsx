import React, { useState } from 'react';
import about_image from "@assets/images/about/about_image_1.png";
import Image from 'next/image';
import Link from 'next/link';
import shape2 from '@assets/images/shapes/shape_circle_half_3.svg'
import ModalVideo from 'react-modal-video';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);

    const { t } = useTranslation('components');

    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setIsOpen(false)} />
            <section className="about_section section_space_lg decoration_wrap bg_gradient_light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-6 order-last order-lg-first">
                            <div className="about_image decoration_wrap text-center">
                                <Image className="amin-up-down" src={about_image} style={{ width: "100%", height: "100%" }} alt={t('home.about.imageAlt')} />
                            </div>
                        </div>
                        <div className="col col-lg-6">
                            <div className="about_content mb-4 mb-lg-0">
                                <div className="section_heading">
                                    <h2 className="heading_subtitle text-uppercase">
                                        <span className="double_icon">
                                            <i className="fas fa-sharp fa-square-full"></i>
                                            <i className="fas fa-sharp fa-square-full"></i>
                                        </span>
                                        <span>{t('home.about.subtitle')}</span>
                                    </h2>
                                    <h3 className="heading_title">
                                        {t('home.about.title')}
                                    </h3>
                                    <p className="heading_description mb-0">
                                        {t('home.about.description')}
                                    </p>
                                </div>
                                <div className="about_list_boxed">
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <span className="list_item_icon">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            <span className="list_item_text">{t('home.about.comprehensiveAnalysis')}</span>
                                        </li>
                                        <li>
                                            <span className="list_item_icon">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            <span className="list_item_text">{t('home.about.mobileFriendly')}</span>
                                        </li>
                                    </ul>
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <span className="list_item_icon">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            <span className="list_item_text">{t('home.about.wellDesigned')}</span>
                                        </li>
                                        <li>
                                            <span className="list_item_icon">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            <span className="list_item_text">{t('home.about.highPerformance')}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="btn_wrap pb-0">
                                    <ul className="btns_group unordered_list">
                                        <li>
                                            <Link href="/about" className="bd-btn-link btn_primary">
                                                <span className="bd-button-content-wrapper">
                                                    <span className="bd-button-icon">
                                                        <i className="fa-light fa-arrow-right-long"></i>
                                                    </span>
                                                    <span className="pd-animation-flip">
                                                        <span className="bd-btn-anim-wrapp">
                                                            <span className="bd-button-text">{t('home.about.knowMore')}</span>
                                                            <span className="bd-button-text">{t('home.about.knowMore')}</span>
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
                                                <span className="btn_text">{t('home.about.watchVideo')}</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="deco_item shape_2">
                    <Image src={shape2} style={{ width: "100%", height: "100%" }} alt={t('home.about.shapeImageAlt')} />
                </div>
            </section>
        </>
    );
};

export default About;

