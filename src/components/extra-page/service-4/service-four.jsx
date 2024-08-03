import React from 'react';
import shape_color_1 from '@assets/images/shapes/shape_color_1.svg'
import shape_color_2 from '@assets/images/shapes/shape_color_2.svg'
import shape_color_3 from '@assets/images/shapes/shape_color_3.svg'
import shape_color_4 from '@assets/images/shapes/shape_color_4.svg'
import shape_color_5 from '@assets/images/shapes/shape_color_5.svg'
import shape_color_6 from '@assets/images/shapes/shape_color_6.svg'
import shape_color_7 from '@assets/images/shapes/shape_color_7.svg'
import shape_color_8 from '@assets/images/shapes/shape_color_8.svg'

import icon_1 from '@assets/images/icons/icon_code_5.svg'
import icon_2 from '@assets/images/icons/icon_house_2.svg'
import icon_3 from '@assets/images/icons/icon_grid_2.svg'
import icon_4 from '@assets/images/icons/icon_speaker.svg'
import icon_5 from '@assets/images/icons/icon_camera_2.svg'
import icon_6 from '@assets/images/icons/icon_code_4.svg'
import icon_7 from '@assets/images/icons/icon_idea_3.svg'
import icon_8 from '@assets/images/icons/icon_cog.svg'
import icon_arrow_down from '@assets/images/icons/icon_arrow_down_right_dark_2.svg'
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';


const ServiceFour = () => {
    const { t } = useTranslation('components');
  const service_data = [
    {
      id: 1,
      icon: icon_1,
      btn_icon: icon_arrow_down,
      bg_img: shape_color_1,
      title: t('extra-page.service-4.service-four.development.title'),
      description: t('extra-page.service-4.service-four.development.description'),
    },
    {
      id: 2,
      icon: icon_2,
      bg_img: shape_color_2,
      btn_icon: icon_arrow_down,
      title: t('extra-page.service-4.service-four.ux-ui-design.title'),
      description: t('extra-page.service-4.service-four.ux-ui-design.description'),
    },
    {
      id: 3,
      icon: icon_3,
      bg_img: shape_color_3,
      btn_icon: icon_arrow_down,
      title: t('extra-page.service-4.service-four.application.title'),
      description: t('extra-page.service-4.service-four.application.description'),
    },
    {
      id: 4,
      icon: icon_4,
      bg_img: shape_color_4,
      btn_icon: icon_arrow_down,
      title: t('extra-page.service-4.service-four.marketing.title'),
      description:  t('extra-page.service-4.service-four.marketing.description'),
    },
    {
      id: 5,
      icon: icon_5,
      bg_img: shape_color_5,
      btn_icon: icon_arrow_down,
      title: t('extra-page.service-4.service-four.video-editing.title'),
      description: t('extra-page.service-4.service-four.video-editing.description'),
    },
    {
      id: 6,
      icon: icon_6,
      bg_img: shape_color_6,
      btn_icon: icon_arrow_down,
      title:  t('extra-page.service-4.service-four.programming.title'),
      description:  t('extra-page.service-4.service-four.programming.description'),
    },
    {
      id: 7,
      icon: icon_7,
      bg_img: shape_color_7,
      btn_icon: icon_arrow_down,
      title: t('extra-page.service-4.service-four.business.title'),
      description: t('extra-page.service-4.service-four.business.description'),
    },
    {
      id: 8,
      icon: icon_8,
      bg_img: shape_color_8,
      btn_icon: icon_arrow_down,
      title:  t('extra-page.service-4.service-four.tech-support.title'),
      description: t('extra-page.service-4.service-four.tech-support.description'),
    }
  ]
  return (
    <section className="service_section section_space_lg">
      <div className="container">
        <div className="row">
          {
            service_data.slice(0, 8).map((item) => (
              <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-6" key={item.id}>
                <div className="service_item style_4">
                  <div className="item_icon" style={{ backgroundImage: `url(${item?.bg_img.src})` }}>
                    <Image src={item.icon} style={{ height: "100%" }} alt="Paradox Icon" />
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">
                      {item.title}
                    </h3>
                    <p className="item_description">
                      {item.description}
                    </p>
                  </div>
                  <Link className="item_details_btn" href={`/service-details/${item.id}`} data-magnetic data-cursor="-opaque">
                    <span className="btn_icon">
                      <Image src={item.btn_icon} style={{ height: "100%" }} alt={t('extra-page.service-4.service-four.alt.icon')} />
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

export default ServiceFour;