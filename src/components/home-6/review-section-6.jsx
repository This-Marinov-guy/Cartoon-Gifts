import React, { useState } from 'react';
import video_poster_img from '@assets/images/video/video_poster_image_2.jpg';
import Image from 'next/image';
import review_data from '@data/common_data/review-data';

import Slider from "react-slick";
import ModalVideo from 'react-modal-video';
import { useRef } from 'react';

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

  const review_slider = {
    dots: true,
    speed: 1000,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplaySpeed: 5000,
  };

  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);

  return (
    <>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setIsOpen(false)} />
        <section className="review_section bg_light position-relative">
          <div className="container">
            <div className="row">
              <div className="col col-xl-6 col-lg-6 p-0">
                <div className="testimonial-player">
                  <div className="video_widget rounded-0">
                    <Image src={video_poster_img} style={{ width: "100%", height: "100%" }} alt="Paradox Video Poster Image" />
                    <button type='button' className="video_play_icon popup_video" onClick={() => { openVideoModal(); }}>
                      <span className="icon_wrap" data-magnetic>
                        <i className="fas fa-play"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col col-xl-6 col-lg-6 p-lg-0">
                <div className="review_carousel_4">
                  <div className="common_carousel_1col row">
                    <Slider {...review_slider}>
                      {
                        review_data.slice(0, 3).map((item) => (
                          <div className="carousel_item col" key={item.id}>
                            <div className="review_item style_3">
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
                                <Image src={item.quote_icon} style={{ width: "100%", height: "auto" }} alt="Paradox Icon Quote" />
                              </span>
                              <div className="admin_item">
                                <div className="admin_thumbnail">
                                  <Image src={item.thumbnail} style={{ width: "100%", height: "auto" }} alt="Admin Avatar" />
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
            </div>
          </div>
        </section>
    </>
  );
};

export default ReviewSectionSix;