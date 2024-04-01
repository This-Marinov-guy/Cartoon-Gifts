import React from 'react';
import review_data from '@data/common_data/review-data';
import Image from 'next/image';

import Slider from "react-slick";
import { useRef } from 'react';

const ReviewSection = () => {
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
const settings = {
    dots: true,
    speed: 1000,
    arrows: false,
    infinite: true,
    autoplay: true,
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
            }
        }, 
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, 
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }, 
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        },
    ]
};

  return (
    <section className="review_section section_space_lg bg_dark_3">
      <div className="container">
        <div className="section_heading text-center text-white">
          <h2 className="heading_subtitle text-uppercase">
            <span className="double_icon">
              <i className="fas fa-sharp fa-square-full"></i>
              <i className="fas fa-sharp fa-square-full"></i>
            </span>
            <span>Client Says</span>
          </h2>
          <h3 className="heading_title mb-0">
            What People Says
          </h3>
        </div>

        <div className="review_carousel text-white">
          <div className="row common_carousel_3col" data-slick='{"arrows": false}'>
            <Slider {...settings} ref={sliderRef}>
              {
                review_data.slice(0, 7).map((item) => (
                  <div className="col carousel_item" key={item.id}>
                    <div className="review_item style_1">
                      <div className="content_area">
                        <p className="review_content">
                          {item.review_content}
                        </p>
                        <ul className="rating_star unordered_list">
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                          <li><i className="fas fa-star"></i></li>
                        </ul>
                        <span className="quote_icon">
                          <Image src={item.quote_icon} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Quote" />
                        </span>
                      </div>
                      <div className="admin_item">
                        <div className="admin_thumbnail">
                          <Image src={item.thumbnail} style={{ width: "100%", height: "100%" }} alt="Admin Avatar" />
                        </div>
                        <div className="admin_info">
                          <h3 className="admin_name">{item.admin_name}</h3>
                          <span className="admin_designation">{item.designation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
        <div className="d-md-none">
          <ul className="carousel_arrow unordered_list_center carousel_arrow_white">
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

export default ReviewSection;