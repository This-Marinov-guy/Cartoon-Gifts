import Link from 'next/link';
import React, { useRef } from 'react';
import service_data from '@data/common_data/service-data';
import Image from 'next/image';
import Slider from "react-slick";


const ServiceSectionThere = () => {
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const service_slider_a = {
    dots: true,
    speed: 1000,
    arrows: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ]
  };
  return (
    <section className="service_section section_space_lg pb-0">
      <div className="container">
        <div className="section_heading text-center">
          <h2 className="heading_subtitle text-uppercase">
            <span className="double_icon">
              <i className="fas fa-sharp fa-square-full"></i>
              <i className="fas fa-sharp fa-square-full"></i>
            </span>
            <span>What we Do</span>
          </h2>
          <h3 className="heading_title mb-0">
            Offering latest services
          </h3>
        </div>

        <div className="services_carousel">
          <div className="row common_carousel_3col" data-slick='{"arrows": false, "autoplay:": false}'>
            <Slider {...service_slider_a} ref={sliderRef}>
              {service_data.slice(0, 7).map((item) => (
                <div className="col carousel_item" key={item.id} >
                  <div className="service_item style_2 bg-light">
                    <div className="item_icon">
                      <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="Paradox illustration Icon" />
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">
                        {item.category}
                      </h3>
                      <p className="item_description mb-0">
                        {item.item_description}
                      </p>
                    </div>
                    <Link className="item_details_btn" href={`/service-details/${item.id}`}>
                      <span className="btn_icon">
                        <Image src={item.btn_icon} style={{ width: "100%", height: "100%" }} alt="Paradox icons" />
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="d-md-none">
          <ul className="carousel_arrow unordered_list_center">
            <li>
              <button
                type="button"
                className="cc1c_left_arrow slick-arrow"
                onClick={handlePrevClick}
              >
                <i className="far fa-arrow-left"></i>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="cc1c_right_arrow slick-arrow"
                onClick={handleNextClick}
              >
                <i className="far fa-arrow-right"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionThere;