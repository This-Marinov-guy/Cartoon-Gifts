import Link from 'next/link';
import React, { useState } from 'react';
import service_details from '@assets/images/video/service_details_video_poster.jpg';
import icon_together from '@assets/images/icons/icon_together_primary.svg';
import icon_care from '@assets/images/icons/icon_care_primary.svg';
import icon_teaching from '@assets/images/icons/icon_teaching_primary.svg';
import icon_communication from '@assets/images/icons/icon_communication_primary.svg';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
import useTranslation from 'next-translate/useTranslation';


const DetailsSection = ({ item }) => {
    const { t } = useTranslation('components');
  const [isOpen, setIsOpen] = useState(false);

  const openVideoModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setIsOpen(false)} />
      <section className="details_section service_details section_space_lg position-relative">
        <div className="container">
          <div className="details_content_wrap">
            <div className="row">
              <div className="col col-lg-6">
                <div className="details_sectio_content mb-4 mb-lg-0">
                  <div className="section_heading">
                    <h2 className="heading_title mb-0">
                      {item?.fullTitle}
                    </h2>
                  </div>
                  <Link href="/pricing" className="bd-btn-link btn_primary">
                    <span className="bd-button-content-wrapper">
                      <span className="bd-button-icon">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </span>
                      <span className="pd-animation-flip">
                        <span className="bd-btn-anim-wrapp">
                          <span className="bd-button-text">{t('extra-page.service-details.details-section.getServiceNow')}</span>
                          <span className="bd-button-text">{t('extra-page.service-details.details-section.getServiceNow')}</span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col col-lg-6">
                <p>
                {t('extra-page.service-details.details-section.websiteDevelopmentDescription')}
                </p>
                <ul className="icon_list unordered_list_block">
                  <li>
                    <span className="list_item_icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="list_item_text">{t('extra-page.service-details.details-section.frontendDevelopment')}</span>
                  </li>
                  <li>
                    <span className="list_item_icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="list_item_text">{t('extra-page.service-details.details-section.backendDevelopment')}</span>
                  </li>
                  <li>
                    <span className="list_item_icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="list_item_text">{t('extra-page.service-details.details-section.testingAndDebugging')}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="section_space_lg">
              <div className="video_widget">
                <Image src={service_details} style={{ width: "100%", height: "100%" }} alt="Paradox Service Video Poster" />
                <button type='button' className="video_play_icon popup_video" onClick={openVideoModal}>
                  <span className="icon_wrap" data-magnetic>
                    <i className="fas fa-play"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-4">
                <div className="details_sectio_content mb-4 mb-lg-0">
                  <div className="section_heading">
                    <h2 className="heading_title mb-0">
                    {t('extra-page.service-details.details-section.ourServicesTitle')}
                    </h2>
                  </div>
                  <Link href="/pricing" className="bd-btn-link btn_primary">
                    <span className="bd-button-content-wrapper">
                      <span className="bd-button-icon">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </span>
                      <span className="pd-animation-flip">
                        <span className="bd-btn-anim-wrapp">
                          <span className="bd-button-text">{t('extra-page.service-details.details-section.viewCaseStudies')}</span>
                          <span className="bd-button-text">{t('extra-page.service-details.details-section.viewCaseStudies')}</span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col col-lg-8">
                <div className="row">
                  <div className="col col-md-6">
                    <div className="iconbox_item bg-white">
                      <div className="item_icon">
                        <Image src={icon_care} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Eye White" />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">{t('extra-page.service-details.details-section.clientCareTitle')}</h3>
                        <p className="mb-0">
                        {t('extra-page.service-details.details-section.clientCareDescription')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="iconbox_item bg-white">
                      <div className="item_icon">
                        <Image src={icon_together} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Eye White" />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">{t('extra-page.service-details.details-section.empathyTitle')}</h3>
                        <p className="mb-0">
                        {t('extra-page.service-details.details-section.empathyDescription')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="iconbox_item bg-white">
                      <div className="item_icon">
                        <Image src={icon_communication} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Eye White" />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">{t('extra-page.service-details.details-section.communicationTitle')}</h3>
                        <p className="mb-0">
                        {t('extra-page.service-details.details-section.communicationDescription')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="iconbox_item bg-white">
                      <div className="item_icon">
                        <Image src={icon_teaching} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Eye White" />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">{t('extra-page.service-details.details-section.teachingTitle')}</h3>
                        <p className="mb-0">
                        {t('extra-page.service-details.details-section.teachingDescription')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsSection;