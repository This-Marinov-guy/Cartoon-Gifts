import React from 'react';
import about_image_1 from '@assets/images/about/about_image_1.png'
import shape_circle_2 from '@assets/images/shapes/shape_circle_2.svg'
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const DetailsAboutSection = () => {
    const { t } = useTranslation('components');

  return (
    <section className="about_section section_space_lg pb-0 decoration_wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-6">
            <div className="about_image decoration_wrap mb-4 mb-lg-0 text-center">
              <Image className="wow fadeInLeft" data-wow-delay=".1s" src={about_image_1} style={{ width: "100%", height: "100%" }} alt={t('extra-page.about-page.about-section.paradoxAboutImage')} />
              <div className="deco_item shape_1">
                <Image className="wow zoomIn" data-wow-delay=".1s" src={shape_circle_2} style={{ width: "100%", height: "100%" }} alt={t('extra-page.about-page.about-section.paradoxShapeImage')} />
              </div>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="about_content">
              <div className="section_heading mb-0">
                <h2 className="heading_subtitle text-uppercase">
                  <span className="double_icon">
                    <i className="fas fa-sharp fa-square-full"></i>
                    <i className="fas fa-sharp fa-square-full"></i>
                  </span>
                  <span>{t('extra-page.about-page.about-section.aboutUs')}</span>
                </h2>
                <h3 className="heading_title">
                    {t('extra-page.about-page.about-section.bestStartup')}
                </h3>
                <p className="heading_description">
                    {t('extra-page.about-page.about-section.focusedPlanned')}
                </p>
                <p className="heading_description mb-0">
                    {t('extra-page.about-page.about-section.maximizeProfits')}
                </p>
              </div>
              <hr />
              <div className="row">
                <div className="col col-md-6">
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="list_item_text">{t('extra-page.about-page.about-section.comprehensiveAnalysis')}</span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="list_item_text">{t('extra-page.about-page.about-section.mobileFriendly')}</span>
                    </li>
                  </ul>
                </div>
                <div className="col col-md-6">
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="list_item_text">{t('extra-page.about-page.about-section.wellDesigned')}</span>
                    </li>
                    <li>
                      <span className="list_item_icon">
                        <i className="fas fa-check"></i>
                      </span>
                      <span className="list_item_text">{t('extra-page.about-page.about-section.highPerformance')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="btn_wrap">
                <Link href="/service" className="bd-btn-link btn_primary">
                  <span className="bd-button-content-wrapper">
                    <span className="bd-button-icon">
                      <i className="fa-light fa-arrow-right-long"></i>
                    </span>
                    <span className="pd-animation-flip">
                      <span className="bd-btn-anim-wrapp">
                        <span className="bd-button-text">{t('extra-page.about-page.about-section.getQuotes')}</span>
                        <span className="bd-button-text">{t('extra-page.about-page.about-section.getQuotes')}</span>
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

export default DetailsAboutSection;