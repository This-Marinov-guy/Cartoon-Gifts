import React, { useState } from 'react';
import video_poster_image from '@assets/images/video/video_poster_image_1.jpg'
import icon_eye_white from '@assets/images/icons/icon_eye_white.svg'
import icon_dart_board from '@assets/images/icons/icon_dart_board_white.svg'
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
import useTranslation from 'next-translate/useTranslation';

const AboutSectionTwo = () => {

  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  const { t } = useTranslation('components');

  return (
    <>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setIsOpen(false)} />
    <section className="about_section_2">
      <div className="video_widget rounded-0">
        <Image src={video_poster_image} style={{ width: "100%", height: "100%" }} alt={t('extra-page.about-page.about-section-2.videoPosterAlt')} />
        <button type='button' className="video_play_icon popup_video" onClick={() => { openVideoModal(); }}>
          <span className="icon_wrap" data-magnetic>
            <i className="fas fa-play"></i>
          </span>
        </button>
      </div>
      <div className="container">
        <div className="row align-items-center m-0">
          <div className="col col-xl-7 col-lg-7 p-0">
            <div className="about_content">
              <div className="section_heading text-white">
                <h2 className="heading_subtitle text-uppercase">
                  <span className="double_icon">
                    <i className="fas fa-sharp fa-square-full"></i>
                    <i className="fas fa-sharp fa-square-full"></i>
                  </span>
                  <span>{t('extra-page.about-page.about-section-2.whoWeAre')}</span>
                </h2>
                <h3 className="heading_title">
                    {t('extra-page.about-page.about-section-2.itSolutions')}
                </h3>
                <p className="heading_description mb-0">
                    {t('extra-page.about-page.about-section-2.softwareDescription')}
                </p>
              </div>
              <div className="mission_vision row">
                <div className="col col-md-6">
                  <div className="iconbox_item text-white">
                    <div className="item_icon">
                      <Image src={icon_eye_white} style={{ width: "auto", height: "auto" }} alt={t('extra-page.about-page.about-section-2.visionIconAlt')} />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">{t('extra-page.about-page.about-section-2.ourVision')}</h3>
                      <p className="mb-0">
                        {t('extra-page.about-page.about-section-2.visionDescription')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className="iconbox_item text-white">
                    <div className="item_icon">
                      <Image src={icon_dart_board} style={{ width: "auto", height: "auto" }} alt={t('extra-page.about-page.about-section-2.missionIconAlt')} />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">{t('extra-page.about-page.about-section-2.ourMission')}</h3>
                      <p className="mb-0">
                        {t('extra-page.about-page.about-section-2.missionDescription')}
                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="total_review_info text-white pt-4">
                <div className="review_stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="review_text">
                  <span className="odometer" data-count="200">0</span>
                  <span>+ {t('extra-page.about-page.about-section-2.clientReviews')}</span>
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

export default AboutSectionTwo;