import React from 'react';
import details_image from '@assets/images/portfolio/portfolio_item_details_image.jpg'
import icon_care_primary from '@assets/images/icons/icon_care_primary.svg'
import icon_together_primary from '@assets/images/icons/icon_together_primary.svg'
import icon_communication_primary from '@assets/images/icons/icon_communication_primary.svg'
import details_image_2 from '@assets/images/portfolio/portfolio_item_details_image_2.jpg'
import details_image_3 from '@assets/images/portfolio/portfolio_item_details_image_3.jpg'
import icon_arrow_down from '@assets/images/icons/icon_arrow_down_left_dark.svg'
import icon_arrow_left_primary from '@assets/images/icons/icon_arrow_left_primary.svg'
import icon_arrow_down_right from '@assets/images/icons/icon_arrow_down_right_dark.svg'
import icon_arrow_right_primary from '@assets/images/icons/icon_arrow_right_primary.svg'
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const DetailsSection = ({item}) => {
    const { t } = useTranslation('components');
  return (
    <section className="details_section portfolio_details section_space_lg">
      <div className="container">
        <div className="section_space_md pt-0">
          <div className="details_item_image">
            <Image src={details_image} style={{ width: "100%", height: "100%" }} alt={t('extra-page.portfolio-details.details-section.titleAlt')} />
          </div>
        </div>
        <div className="details_content_wrap">
          <div className="row align-items-center">
            <div className="col col-lg-6">
              <div className="section_heading mb-0 mb-lg-5">
                <h2 className="heading_title mb-0">
                  {item.title}
                </h2>
              </div>
            </div>
            <div className="col col-lg-6">
              <p>
                {t('extra-page.portfolio-details.details-section.description')}
              </p>
            </div>
          </div>
          <div className="details_info_box">
            <div className="row">
              <div className="col col-lg-3 col-md-6 col-md-6 col-sm-6">
                <span>{t('extra-page.portfolio-details.details-section.date')}</span>
                <strong>{t('extra-page.portfolio-details.details-section.dateValue')}</strong>
              </div>
              <div className="col col-lg-3 col-md-6 col-md-6 col-sm-6">
                <span>{t('extra-page.portfolio-details.details-section.category')}</span>
                <strong>{t('extra-page.portfolio-details.details-section.categoryValue')}</strong>
              </div>
              <div className="col col-lg-3 col-md-6 col-md-6 col-sm-6">
                <span>{t('extra-page.portfolio-details.details-section.estimation')}</span>
                <strong>{t('extra-page.portfolio-details.details-section.estimationValue')}</strong>
              </div>
              <div className="col col-lg-3 col-md-6 col-md-6 col-sm-6">
                <span>{t('extra-page.portfolio-details.details-section.client')}</span>
                <strong>{t('extra-page.portfolio-details.details-section.clientValue')}</strong>
              </div>
            </div>
          </div>
 <h3 className="details_item_info_title mb-3">
            {t('extra-page.portfolio-details.details-section.ourPlanning')}
          </h3>
          <p>
            {t('extra-page.portfolio-details.details-section.planningDescription')}
          </p>
          <div className="row mb-5">
            <div className="col col-lg-4 col-md-6">
              <div className="iconbox_item bg-white">
                <div className="item_icon">
                  <Image src={icon_care_primary} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Eye White" />
                </div>
                <div className="item_content">
                    <h3 className="item_title">{t('extra-page.portfolio-details.details-section.clientCareTitle')}</h3>
                    <p className="mb-0">
                        {t('extra-page.portfolio-details.details-section.clientCareDescription')}
                    </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6">
              <div className="iconbox_item bg-white">
                <div className="item_icon">
                  <Image src={icon_together_primary} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Eye White" />
                </div>
                <div className="item_content">
                    <h3 className="item_title">{t('extra-page.portfolio-details.details-section.usingEmpathyTitle')}</h3>
                    <p className="mb-0">
                        {t('extra-page.portfolio-details.details-section.usingEmpathyDescription')}
                    </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6">
              <div className="iconbox_item bg-white">
                <div className="item_icon">
                  <Image src={icon_communication_primary} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Eye White" />
                </div>
                <div className="item_content">
                    <h3 className="item_title">{t('extra-page.portfolio-details.details-section.communicationSkillsTitle')}</h3>
                    <p className="mb-0">
                        {t('extra-page.portfolio-details.details-section.communicationSkillsDescription')}
                    </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-lg-between mb-5">
            <div className="col col-lg-4">
              <div className="details_sectio_content mb-4 mb-lg-0">
                <div className="section_heading">
                  <h2 className="heading_title">
                    {t('extra-page.portfolio-details.details-section.whatWeDidTitle')}
                  </h2>
                </div>
                <Link href="/pricing" className="bd-btn-link btn-primary">
                  <span className="bd-button-content-wrapper">
                    <span className="bd-button-icon">
                      <i className="fa-light fa-arrow-right-long"></i>
                    </span>
                    <span className="pd-animation-flip">
                      <span className="bd-btn-anim-wrapp">
                        <span className="bd-button-text">{t('extra-page.portfolio-details.details-section.getService')}</span>
                        <span className="bd-button-text">{t('extra-page.portfolio-details.details-section.getService')}</span>
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col col-lg-6">
              <p>
                {t('extra-page.portfolio-details.details-section.websiteDevelopmentDescription')}
              </p>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.portfolio-details.details-section.designingProduct')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.portfolio-details.details-section.testersTest')}</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">{t('extra-page.portfolio-details.details-section.systemMaintenance')}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col col-md-6">
              <div className="details_item_image m-0">
                <Image src={details_image_2} style={{ width: "100%", height: "100%" }} alt={t('extra-page.portfolio-details.details-section.titleAlt')} />
              </div>
            </div>
            <div className="col col-md-6">
              <div className="details_item_image m-0">
                <Image src={details_image_3} style={{ width: "100%", height: "100%" }} alt={t('extra-page.portfolio-details.details-section.titleAlt')} />
              </div>
            </div>
          </div>

          <h3 className="details_item_info_title mb-3">
            {t('extra-page.portfolio-details.details-section.finalResult')}
          </h3>
          <p>
            {t('extra-page.portfolio-details.details-section.finalResultDescription')}
          </p>

          <div className="social_wrap">
            <h3 className="social_title text-uppercase">{t('extra-page.portfolio-details.details-section.share')}:</h3>
            <ul className="social_icon unordered_list_end">
              <li><Link href="https://www.facebook.com/cartoongiftsbulgaria1/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
              <li><Link href="https://www.instagram.com/cartoongiftsbulgaria/?hl=en" target="_blank"><i className="fab fa-youtube"></i></Link></li>
            </ul>
          </div>

          <div className="pagination_wrap">
            <div className="other_post_pagination">
              <Link href="/portfolio-details" data-cursor="-exclusion -lg" data-cursor-stick="#prev_post">
                <span className="btn_text">{t('extra-page.portfolio-details.details-section.previousPortfolio')}</span>
                <span id="prev_post" className="btn_icon">
                  <Image src={icon_arrow_down} style={{ width: "100%", height: "100%" }} alt="Paradox - Icon Arrow Down Left" />
                  <Image src={icon_arrow_left_primary} style={{ width: "100%", height: "100%" }} alt="Paradox - Icon Arrow Down Left" />
                </span>
              </Link>
              <Link href="/portfolio-details" data-cursor="-exclusion -lg" data-cursor-stick="#next_post">
                <span className="btn_text">{t('extra-page.portfolio-details.details-section.nextPortfolio')}</span>
                <span id="next_post" className="btn_icon">
                  <Image src={icon_arrow_down_right} style={{ width: "100%", height: "100%" }} alt="Paradox - Icon Arrow Down Right" />
                  <Image src={icon_arrow_right_primary} style={{ width: "100%", height: "100%" }} alt="Paradox - Icon Arrow Down Right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;