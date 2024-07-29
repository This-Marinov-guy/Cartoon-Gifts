import React, { useRef } from 'react';
import review_data from '@data/common_data/review-data';
import Image from 'next/image';
import Slider from "react-slick";


const ReviewSectionSix = () => {
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
    dots: false,
    speed: 1000,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }
  return (
    <section className="review_section section_space_lg bg_primary">
      <div className="container">
        <div className="section_heading text-center text-white">
          <h2 className="heading_subtitle">
            <span className="double_icon">
              <i className="fas fa-sharp fa-square-full"></i>
              <i className="fas fa-sharp fa-square-full"></i>
            </span>
            <span>Reviews</span>
          </h2>
          <h3 className="heading_title mb-0">
            What Our Clients Say
          </h3>
        </div>

        <div className="review_carousel_3">
          <div className="common_carousel_2col row" data-slick='{"dots": false}'>
            <Slider {...settings} ref={sliderRef}>
              {review_data.length > 0 &&
                review_data.map((item) => (
                  <div className="carousel_item col" style={{height: '100%'}} key={item.id}>
                    <div className="review_item style_2 text-center">
                      <h3 className="review_title">{item.title}</h3>
                      <ul className="rating_star unordered_list">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                      </ul>
                      <p className="review_content">
                        {item.content}
                      </p>
                      <span className="quote_icon">
                        <Image src={item.quote_icon} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Quote" />
                      </span>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
          <ul className="carousel_arrow unordered_list_center">
            <li>
              <button type="button" className="cc2c_left_arrow slick-arrow" onClick={handlePrevClick}>
                <i className="far fa-arrow-left"></i>
              </button>
            </li>
            <li>
              <button type="button" className="cc2c_right_arrow slick-arrow" onClick={handleNextClick}>
                <i className="far fa-arrow-right"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}



export default ReviewSectionSix;