import Image from 'next/image';
import React, { useRef } from 'react';
import shape_box_1 from '@assets/images/shapes/shape_box_1.png'
import shape_box_2 from '@assets/images/shapes/shape_box_2.png'
import shape_box_3 from '@assets/images/shapes/shape_box_3.png'

import review_data from '@data/common_data/review-data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



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
    dots: false,
    speed: 1000,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="review_section section_space_lg bg_light_2">
      <div className="container decoration_wrap">
        <div className="section_heading style_2 text-center">
          <h2 className="heading_subtitle">
            <span>Testimonials</span>
          </h2>
          <h3 className="heading_title mb-0">
            What My Clients Say
          </h3>
        </div>

        <div className="row justify-content-center">
          <div className="col col-lg-7 col-md-8">
            <div className="review_carousel_3 arrow_right_left">
              <div className="common_carousel_1colkju row" data-slick='{"dots": false}'>
                <Slider {...settings} ref={sliderRef}>
                  {review_data.length > 0 &&
                    review_data.slice(0, 3).map((item) => (
                      <div className="carousel_item col" key={item.id}>
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
                            {item.description}
                          </p>
                          <span className="quote_icon">
                            <Image src={item.quote_icon} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Quote" />
                          </span>
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
              <ul className="carousel_arrow unordered_list_center">
                <li>
                  <button type="button" className='cc1c_left_arrow slick-arrow' onClick={handlePrevClick}>
                    <i className="far fa-arrow-left"></i>
                  </button>
                </li>
                <li>
                  <button type="button" className='cc1c_right_arrow slick-arrow' onClick={handleNextClick}>
                    <i className="far fa-arrow-right"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="deco_item shape_1" data-parallax='{"y" : 200, "smoothness": 20}'>
          <Image src={shape_box_1} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration" />
        </div>
        <div className="deco_item shape_2" data-parallax='{"y" : -200, "smoothness": 20}'>
          <Image src={shape_box_2} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration" />
        </div>
        <div className="deco_item shape_3" data-parallax='{"y" : 200, "smoothness": 20}'>
          <Image src={shape_box_3} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration" />
        </div>
      </div>
    </section>
  );
}


export default ReviewSection;