import React from "react";

// import Swiper and modules styles
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import useTranslation from 'next-translate/useTranslation';

const HistorySection = () => {
    const { t } = useTranslation('components');
  return (
    <section className="history_section section_space_lg">
      <div className="container">
        <div className="section_heading text-center">
          <h2 className="heading_subtitle text-uppercase">
            <span className="double_icon">
              <i className="fas fa-sharp fa-square-full"></i>
              <i className="fas fa-sharp fa-square-full"></i>
            </span>
            <span>{t('extra-page.about-page.history-section.title')}</span>
          </h2>
          <h3 className="heading_title mb-0">{t('extra-page.about-page.history-section.subtitle')}</h3>
        </div>
      </div>
      <div className="history_carousel_wrap">
        <div className="history_carousel">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            loop={false}
            navigation={{
              clickable: true,
              nextEl: ".portfolio-button-next",
              prevEl: ".portfolio-button-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3.2,
              },
            }}
          >
            <SwiperSlide>
              <br></br>
              <div className="carousel_item">
                <div className="content_wrap">
                  <div className="iconbox_item">
                    <div className="item_content">
                      <h3 className="item_title">
                        {t('extra-page.about-page.history-section.eventTitle')}
                      </h3>
                      <p className="mb-0">
                        {t('extra-page.about-page.history-section.eventDesc')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4 className="year_text m-0 text-center">
                    <span>2002</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel_item">
                <div className="content_wrap">
                  <div className="iconbox_item">
                    <div className="item_content">
                      <h3 className="item_title">
                        {t('extra-page.about-page.history-section.eventTitle')}
                      </h3>
                      <p className="mb-0">
                        {t('extra-page.about-page.history-section.eventDesc')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4 className="year_text m-0 text-center">
                    <span>2004</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <br></br>
              <div className="carousel_item">
                <div className="content_wrap">
                  <div className="iconbox_item">
                    <div className="item_content">
                      <h3 className="item_title">
                        {t('extra-page.about-page.history-section.eventTitle')}
                      </h3>
                      <p className="mb-0">
                        {t('extra-page.about-page.history-section.eventDesc')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4 className="year_text m-0 text-center">
                    <span>2010</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="carousel_item">
                <div className="content_wrap">
                  <div className="iconbox_item">
                    <div className="item_content">
                      <h3 className="item_title">
                        {t('extra-page.about-page.history-section.eventTitle')}
                      </h3>
                      <p className="mb-0">
                        {t('extra-page.about-page.history-section.eventDesc')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4 className="year_text m-0 text-center">
                    <span>2014</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <br></br>
              <div className="carousel_item">
                <div className="content_wrap">
                  <div className="iconbox_item">
                    <div className="item_content">
                      <h3 className="item_title">
                        {t('extra-page.about-page.history-section.eventTitle')}
                      </h3>
                      <p className="mb-0">
                        {t('extra-page.about-page.history-section.eventDesc')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4 className="year_text m-0 text-center">
                    <span>2019</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="carousel_item">
                <div className="content_wrap">
                  <div className="iconbox_item">
                    <div className="item_content">
                      <h3 className="item_title">
                        {t('extra-page.about-page.history-section.eventTitle')}
                      </h3>
                      <p className="mb-0">
                        {t('extra-page.about-page.history-section.eventDesc')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_wrap">
                  <h4 className="year_text m-0 text-center">
                    <span>2023</span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
