import React from 'react';
import review_data from '@data/common_data/review-data';
import Image from 'next/image';

import Slider from "react-slick";

const ReviewSection = () => {
  const review_carousel = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2.5,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <section className="review_section section_space_heading bg_light overflow-hidden">
      <div className="container">
        <div className="section_heading text-center">
          <h2 className="heading_title mb-0">
            What People Says
          </h2>
        </div>
        <div className="review_carousel">
          <div className="row common_carousel_3col" data-slick='{"arrows": false}'>
            <Slider {...review_carousel}>
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

                ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;