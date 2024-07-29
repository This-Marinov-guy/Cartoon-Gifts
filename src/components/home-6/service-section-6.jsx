import React, { useRef } from "react";
import service_data from "@data/common_data/service-data";
import section_overlay from "@assets/images/shapes/shape_7.svg";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

const ServiceSectionSix = () => {
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
  const services_carousel = {
    dots: true,
    speed: 1000,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section
      className="service_section_2"
      style={{ backgroundImage: `url(${section_overlay.src})` }}
    >
      <div className="container">
        <div className="section_heading style_4 text-center">
          <h2 className="heading_subtitle text-uppercase">
            <span>Our Service</span>
          </h2>
          <h3 className="heading_title mb-0">Providing solutions</h3>
        </div>
        <div
          className="common_carousel_4col row"
          data-slick='{"arrows": false}'
        >
          <Slider {...services_carousel} ref={sliderRef}>
            {service_data.slice(24, 33).map((item) => (
              <div className="carousel_item col" key={item.id}>
                <div className="service_item style_4 bg-white">
                  <div
                    className="item_icon"
                    style={{ backgroundImage: `url(${item.overlay_bg.src})` }}
                  >
                    <Image src={item.icon_svg} alt="Paradox icons" />
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">{item.title}</h3>
                    <p className="item_description">{item.description}</p>
                  </div>
                  <Link
                    className="item_details_btn"
                    href={`/service-details/${item.id}`}
                    data-magnetic
                    data-cursor="-opaque"
                  >
                    <span className="btn_icon">
                      <Image
                        src={item.btn_icon}
                        style={{ width: "100%", height: "100%" }}
                        alt="Paradox icons"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
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

export default ServiceSectionSix;
