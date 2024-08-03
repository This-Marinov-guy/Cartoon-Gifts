import React from 'react';
import icon_development from '@assets/images/icons/icon_development.svg'
import icon_flexibility from '@assets/images/icons/icon_flexibility.svg'
import icon_design from '@assets/images/icons/icon_design.svg'
import icon_maintenance from '@assets/images/icons/icon_maintenance.svg'
import shape_line_flow from '@assets/images/shapes/shape_line_flow.svg'
import shape_circle_2 from '@assets/images/shapes/shape_circle_2.svg'
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const PolicySection = () => {
    const { t } = useTranslation('components');
  return (
    <section className="policy_section section_space_lg decoration_wrap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-lg-6 col-md-8">
            <div className="section_heading text-center">
              <h2 className="heading_subtitle text-uppercase">
                <span className="double_icon">
                  <i className="fas fa-sharp fa-square-full"></i>
                  <i className="fas fa-sharp fa-square-full"></i>
                </span>
                <span>{t('extra-page.service-main-area.policy-section.whyChooseUs')}</span>
              </h2>
              <h3 className="heading_title mb-0">
              {t('extra-page.service-main-area.policy-section.higherAndBetterStage')}
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-3 col-md-6 col-sm-6" data-parallax='{"y" : 30, "smoothness": 10}'>
            <div className="iconbox_item policy_item mb-4 mb-sm-0">
              <div className="item_icon">
                <Image src={icon_development} alt={t('extra-page.service-main-area.policy-section.fastDevelopmentAlt')} />
              </div>
              <div className="item_content">
                <h3 className="item_title">{t('extra-page.service-main-area.policy-section.fastDevelopment')}</h3>
                <p className="mb-0">
                {t('extra-page.service-main-area.policy-section.fastDevelopmentDesc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-6" data-parallax='{"y" : -30, "smoothness": 10}'>
            <div className="iconbox_item policy_item">
              <div className="item_icon">
                <Image src={icon_flexibility} alt={t('extra-page.service-main-area.policy-section.fullFlexibilityAlt')} />
              </div>
              <div className="item_content">
                <h3 className="item_title">{t('extra-page.service-main-area.policy-section.fullFlexibility')}</h3>
                <p className="mb-0">
                {t('extra-page.service-main-area.policy-section.fullFlexibilityDesc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-6" data-parallax='{"y" : 30, "smoothness": 10}'>
            <div className="iconbox_item policy_item mb-4 mb-sm-0">
              <div className="item_icon">
                <Image src={icon_design} alt={t('extra-page.service-main-area.policy-section.modernDesignAlt')} />
              </div>
              <div className="item_content">
                <h3 className="item_title">{t('extra-page.service-main-area.policy-section.modernDesign')}</h3>
                <p className="mb-0">
                {t('extra-page.service-main-area.policy-section.modernDesignDesc')}
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-6" data-parallax='{"y" : -30, "smoothness": 10}'>
            <div className="iconbox_item policy_item">
              <div className="item_icon">
                <Image src={icon_maintenance} alt={t('extra-page.service-main-area.policy-section.simpleMaintenanceAlt')} />
              </div>
              <div className="item_content">
                <h3 className="item_title">{t('extra-page.service-main-area.policy-section.simpleMaintenance')}</h3>
                <p className="mb-0">
                {t('extra-page.service-main-area.policy-section.simpleMaintenanceDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="deco_item shape_1">
        <Image src={shape_line_flow} style={{ width: "100%", height: "100%" }} alt={t('extra-page.service-main-area.policy-section.shapeLineFlowAlt')} />
      </div>
      <div className="deco_item shape_2">
        <Image src={shape_circle_2} style={{ width: "100%", height: "100%" }} alt={t('extra-page.service-main-area.policy-section.shapeCircleAlt')} />
      </div>
    </section>
  );
};

export default PolicySection;