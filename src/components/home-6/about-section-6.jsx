/* eslint react/no-unescaped-entities */

import React from 'react';
import about_image from '@assets/images/about/about_image_1.png'
import icon_eye_primary from '@assets/images/icons/icon_eye_primary.svg'
import icon_dart_board from '@assets/images/icons/icon_dart_board_primary.svg'
import shape_close_icon from '@assets/images/shapes/shape_close_icon.png'
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const AboutSectionSix = () => {
    const { t } = useTranslation('components');
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
                  <span>{t('home-6.about-section-6.aboutSubtitle')}</span>
                </h2>
                <h3 className="heading_title">
                {t('home-6.about-section-6.aboutTitle')}
                </h3>
                <p className="heading_description mb-0">
                {t('home-6.about-section-6.aboutDescription')}
                </p>
              </div>
              <div className="mission_vision row">
                <div className="col col-md-6">
                  <div className="iconbox_item">
                    <div className="item_icon">
                      <Image src={icon_eye_primary} style={{ width: "auto", height: "auto" }} alt="Paradox Icon Eye White" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">{t('home-6.about-section-6.whatItTakesTitle')}</h3>
                      <p className="mb-0">
                      {t('home-6.about-section-6.whatItTakesDescription')}
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
                      <h3 className="item_title">{t('home-6.about-section-6.howToReceive')}</h3>
                      <p className="mb-0">
                        {t('home-6.about-section-6.howToReceiveDescription')}
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