import Image from 'next/image';
import React from 'react';
import Action_image from '@assets/images/gallery/gallery_13.jpg'
import Shape_image from '@assets/images/shapes/shape_circle_3.svg'
import Link from 'next/link';

import useTranslation from 'next-translate/useTranslation';

const CollectionSection = () => {
    const { t } = useTranslation('components');
  return (
    <div className="calltoaction_section style_1 bg_primary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-6 order-lg-last">
            <div className="cta_image decoration_wrap">
              <Image src={Action_image} style={{ height: "60%", borderRadius: '10%' }} alt={t('home.collection-section.actionImageAlt')} />
              <div className="deco_item shape_1">
                <Image className="wow zoomIn" data-wow-delay=".1s" src={Shape_image} style={{ width: "100%", height: "100%" }} alt={t('home.collection-section.shapeImageAlt')} />
              </div>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="cta_content">
              <div className="section_heading text-white">
                <h2 className="heading_subtitle text-uppercase">
                  <span className="double_icon">
                    <i className="fas fa-sharp fa-square-full"></i>
                    <i className="fas fa-sharp fa-square-full"></i>
                  </span>
                  <span>{t('home.collection-section.getInTouch')}</span>
                </h2>
                <h3 className="heading_title mb-30">
                    {t('home.collection-section.personalCartoon')}
                </h3>
              </div>
              <Link href="/order" className="bd-btn-link btn_warning">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">{t('home.collection-section.makeAnOrder')}</span>
                      <span className="bd-button-text">{t('home.collection-section.orderNow')}</span>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;