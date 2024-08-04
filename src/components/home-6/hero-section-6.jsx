import Link from 'next/link';
import React from 'react';
import hero_banner_img from '@assets/images/banner/hero_banner_image_7.webp'
import shape_banner_1 from '@assets/images/banner/shape_banner_2.svg'
import shape_banner_2 from '@assets/images/banner/shape_banner_3.svg'
import shape_banner_3 from '@assets/images/shapes/shape_close_icon.png'
import shape_circle_1 from '@assets/images/shapes/shape_circle_1.svg'
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const HeroSectionSix = () => {
  const { t } = useTranslation('components');

  return (
    <section className="hero_banner_section style_6 decoration_wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-6 order-lg-last">
            <div className="banner_content_6 mb-5 mb-lg-0">
              <h1 className="hero_banner_heading">
                <span className="d-block">{t('home-6.hero-section-6.getYour')}<span className="focus_text">{t('home-6.hero-section-6.uniqueCartoon')}</span> {t('home-6.hero-section-6.withJustAFewClicks')}</span>
              </h1>
              <ul className="btns_group unordered_list">
                <li>
                  <Link href="/order" className="bd-btn-link btn_primary">
                    <span className="bd-button-content-wrapper">
                      <span className="bd-button-icon">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </span>
                      <span className="pd-animation-flip">
                        <span className="bd-btn-anim-wrapp">
                          <span className="bd-button-text">{t('common.off-canvas.index.makeAnOrder')}</span>
                          <span className="bd-button-text">{t('common.off-canvas.index.orderNow')}</span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="bd-btn-link outline-dark">
                    <span className="bd-button-content-wrapper">
                      <span className="bd-button-icon">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </span>
                      <span className="pd-animation-flip">
                        <span className="bd-btn-anim-wrapp">
                          <span className="bd-button-text">{t('home-6.hero-section-6.learnMore')}</span>
                          <span className="bd-button-text">{t('home-6.hero-section-6.aboutUs')}</span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="hero_banner_image wow fadeInUp" data-wow-delay=".2s">
              <Image src={hero_banner_img} style={{ width: "80%", height: "80%", borderRadius: '10%' }} alt="Paradox Illustration Image" />
            </div>
          </div>
        </div>
      </div>

      <div className="deco_item shape_1">
        <Image src={shape_banner_1} alt="Paradox Illustration Image" />
      </div>
      <div className="deco_item shape_2 wow fadeInUp" data-wow-delay=".2s">
        <Image src={shape_banner_2} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
      </div>
      <div className="deco_item shape_3 wow fadeInUp" data-wow-delay=".4s">
        <Image src={shape_banner_3} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
      </div>
      <div className="deco_item shape_4 wow fadeInUp" data-wow-delay=".6s">
        <Image src={shape_circle_1} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
      </div>
    </section>
  );
};

export default HeroSectionSix;