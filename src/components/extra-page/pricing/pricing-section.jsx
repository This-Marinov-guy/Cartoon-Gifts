import Link from 'next/link';
import React from 'react';
import shape_dots_BG from '@assets/images/shapes/shape_dots_BG.png'
import useTranslation from 'next-translate/useTranslation';

const PricingSection = () => {
    const { t } = useTranslation('components');
  return (
    <section className="pricing_section section_space_lg">
      <div className="container">
        <div className="pricing_items_group row">
          <div className="col col-xl-3 col-lg-4 col-md-6">
            <div className="pricing_item">
              <h3 className="item_title">{t('extra-page.pricing.pricing-section.nano.title')}</h3>
              <div className="price_value">
                <strong>{t('extra-page.pricing.pricing-section.nano.price')}</strong>
                <sub>/{t('extra-page.pricing.pricing-section.nano.duration')}</sub>
              </div>
              <p>
                {t('extra-page.pricing.pricing-section.description')}
              </p>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.homePage')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.innerPageDesign')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.responsive')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.figmaFile')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.customPlugin')}</span>
                </li>
              </ul>
              <Link href="/pricing" className="bd-btn-link outline-dark">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">{t('extra-page.pricing.pricing-section.orderNow')}</span>
                      <span className="bd-button-text">{t('extra-page.pricing.pricing-section.orderNow')}</span>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col col-xl-3 col-lg-4 col-md-6">
            <div className="pricing_item">
                <h3 className="item_title">{t('extra-page.pricing.pricing-section.micro.title')}</h3>
                <div className="price_value">
                    <strong>{t('extra-page.pricing.pricing-section.micro.price')}</strong>
                    <sub>/{t('extra-page.pricing.pricing-section.micro.duration')}</sub>
                </div>
              <p>
                {t('extra-page.pricing.pricing-section.description')}
              </p>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.homePage')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.innerPageDesign')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.responsive')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.figmaFile')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.customPlugin')}</span>
                </li>
              </ul>
              <Link href="/pricing" className="bd-btn-link outline-dark">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">{t('extra-page.pricing.pricing-section.orderNow')}</span>
                      <span className="bd-button-text">{t('extra-page.pricing.pricing-section.orderNow')}</span>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col col-xl-3 col-lg-4 col-md-6">
            <div className="pricing_item recomanded_item" style={{ backgroundImage: `url(${shape_dots_BG.src})` }}>
                <h3 className="item_title">{t('extra-page.pricing.pricing-section.mega.title')}</h3>
                <div className="price_value">
                    <strong>{t('extra-page.pricing.pricing-section.mega.price')}</strong>
                    <sub>/{t('extra-page.pricing.pricing-section.mega.duration')}</sub>
                </div>
              <p>
                {t('extra-page.pricing.pricing-section.description')}
              </p>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.homePage')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.innerPageDesign')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.responsive')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.figmaFile')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.customPlugin')}</span>
                </li>
              </ul>
              <Link href="/about" className="bd-btn-link btn_warning">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">{t('extra-page.pricing.pricing-section.orderNow')}</span>
                      <span className="bd-button-text">{t('extra-page.pricing.pricing-section.orderNow')}</span>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col col-xl-3 col-lg-4 col-md-6">
            <div className="pricing_item">
              <h3 className="item_title">{t('extra-page.pricing.pricing-section.giga.title')}</h3>
              <div className="price_value">
                <strong>{t('extra-page.pricing.pricing-section.giga.price')}</strong>
                <sub>/{t('extra-page.pricing.pricing-section.giga.duration')}</sub>
              </div>
              <p>
                {t('extra-page.pricing.pricing-section.description')}
              </p>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.homePage')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.innerPageDesign')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.responsive')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.figmaFile')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.pricing.pricing-section.features.customPlugin')}</span>
                </li>
              </ul>
              <Link href="/pricing" className="bd-btn-link outline-dark">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">{t('extra-page.pricing.pricing-section.orderNow')}</span>
                      <span className="bd-button-text">{t('extra-page.pricing.pricing-section.orderNow')}</span>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default PricingSection;