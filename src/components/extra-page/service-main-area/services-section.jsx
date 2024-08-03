import React from 'react';
import services_data from '@data/common_data/service-data';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const ServicesSection = () => {
    const { t } = useTranslation('components');
  return (
    <section className="service_section section_space_lg">
      <div className="container">
        <div className="row">
          {
            services_data.slice(7, 13).map((item) => (
              <div className="col col-lg-4 col-md-6 col-sm-6" key={item.id}>
                <div className="service_item style_1">
                  <div className="item_icon">
                    {item.icon}
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">
                      {item.category}
                    </h3>
                    <p className="item_description mb-0">
                      {item.description}
                    </p>
                  </div>
                  <Link className="item_details_btn" href={`/service-details/${item.id}`}>
                    <span className="btn_text">{t('extra-page.service-main-area.services-section.viewDetails')}</span>
                    <span className="btn_icon">
                      <img src="assets/images/icons/icon_arrow_down_right_primary.svg" alt="Paradox icons" />
                      <img src="assets/images/icons/icon_arrow_down_right_white.svg" alt="Paradox icons" />
                    </span>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;