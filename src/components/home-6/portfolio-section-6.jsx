import Link from 'next/link';
import React from 'react';
import portfolio_data from '@data/common_data/portfolio-data';
import Image from 'next/image';
import Slider from "react-slick";
import shape_circle from '@assets/images/shapes/shape_circle_2.svg'

const PortfolioSectionSix = () => {
  const portfolio_slider = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };
  return (
    <section className="portfolio_section section_space_lg decoration_wrap">
      <div className="container">
        <div className="section_heading style_4 text-center">
          <h2 className="heading_subtitle text-uppercase">
            <span>Gallery</span>
          </h2>
          <h3 className="heading_title">
            Our Latest work
          </h3>
        </div>
      </div>
      <div className="row justify-content-center ">
        <div className="col col-xl-12">
          <div className="portfolio_carousel_2 decoration_wrap ">
            <div className="common_carousel_centered_2 ">
              <Slider {...portfolio_slider}>
                {portfolio_data.slice(0, 5).map((item) => (
                  <div className="carousel_item" key={item.id}>
                    <div className="carousel_item">
                      <div className="portfolio_item layout_grid text-center">
                        <div className="item_image">
                          <Image src={item.image} className='portfolio_img' alt="Paradox Portfolio Image" />
                        </div>
                        <div className="item_content">
                          <h3 className="item_title mb-0">
                            {item.title}
                          </h3>
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
      <div className="deco_item shape_1">
        <Image src={shape_circle} style={{ width: "100%", height: "auto" }} alt="Paradox Illustration Image" />
      </div>
    </section>
  );
};

export default PortfolioSectionSix;