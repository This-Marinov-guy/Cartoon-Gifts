import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import hero_banner from "@assets/images/banner/hero_banner_image_1.png";
import circle_2 from "@assets/images/shapes/shape_circle_2.svg";
import line from "@assets/images/shapes/shape_line.svg";

const HeroSection = () => {
    const { t } = useTranslation('components');
    return (
        <section className="hero_banner_section style_1 decoration_wrap fix">
            <div className="container decoration_wrap">
                <div className="row align-items-center">
                    <div className="col col-lg-6 order-last">
                        <div className="hero_banner_image decoration_wrap">
                            <Image className="banner_main_1" src={hero_banner} style={{ width: "100%", height: "auto" }} alt={t('home.heroSection.alt_banner')} />
                            <div className="deco_item shape_3"></div>
                            <div className="deco_item shape_4 wow rotateInDownRight" data-wow-delay=".2s">
                                <img src="/assets/images/shapes/shape_circle_half_1.svg" data-parallax='{"y" : 200, "smoothness": 10}' alt={t('home.heroSection.alt_shape_circle_half_1')}/>
                            </div>
                            <div className="deco_item shape_5 wow zoomIn" data-wow-delay=".3s">
                                <Image src={circle_2} style={{ width: "100%", height: "auto" }} alt={t('home.heroSection.alt_shape_circle_2')} />
                            </div>
                            <div className="deco_item shape_6">
                                <img src="/assets/images/shapes/shape_circle_half_2.svg" alt={t('home.heroSection.alt_shape_circle_half_2')} />
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6">
                        <div className="hero_banner_content mb-5 mb-lg-0">
                            <div className="section_heading">
                                <h2 className="heading_subtitle text-uppercase">
                                    <span className="double_icon">
                                        <i className="fas fa-sharp fa-square-full"></i>
                                        <i className="fas fa-sharp fa-square-full"></i>
                                    </span>
                                    <span>{t('home.heroSection.welcome')}</span>
                                </h2>
                                <h3 className="heading_title">
                                    {t('home.heroSection.turning_idea')} <span><Image className="focus_text" src={line} style={{ width: "auto", height: "auto" }} alt={t('home.heroSection.alt_line')} /> {t('home.heroSection.reality')}</span>
                                </h3>
                                <p className="heading_description mb-0">
                                    {t('home.heroSection.description')}
                                </p>
                            </div>
                            <ul className="btns_group unordered_list">
                                <li>
                                    <Link href="/contact" className="bd-btn-link btn_primary">
                                        <span className="bd-button-content-wrapper">
                                            <span className="bd-button-icon">
                                                <i className="fa-light fa-arrow-right-long"></i>
                                            </span>
                                            <span className="pd-animation-flip">
                                                <span className="bd-btn-anim-wrapp">
                                                    <span className="bd-button-text">{t('home.heroSection.start_cooperation')}</span>
                                                    <span className="bd-button-text">{t('home.heroSection.start_cooperation')}</span>
                                                </span>
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="bd-btn-link outline-dark">
                                        <span className="bd-button-content-wrapper">
                                            <span className="bd-button-icon">
                                                <i className="fa-light fa-arrow-right-long"></i>
                                            </span>
                                            <span className="pd-animation-flip">
                                                <span className="bd-btn-anim-wrapp">
                                                    <span className="bd-button-text">{t('home.heroSection.learn_more')}</span>
                                                    <span className="bd-button-text">{t('home.heroSection.learn_more')}</span>
                                                </span>
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="deco_item shape_2"></div>
            </div>
            <div className="deco_item shape_1"></div>
        </section>
    );
};

export default HeroSection;

