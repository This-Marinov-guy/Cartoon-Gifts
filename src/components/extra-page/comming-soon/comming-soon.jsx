import React from 'react';
import site_logo from '@assets/images/logo/site_logo_dark.svg'
import shape_circle from '@assets/images/shapes/shape_circle_dashed_2.png'
import shape_circle_1 from '@assets/images/shapes/shape_circle_1.svg'
import shape_1 from '@assets/images/shapes/shape_1.svg'
import shape_circle_half_1 from '@assets/images/shapes/shape_circle_half_1.svg'
import shape_circle_2 from '@assets/images/shapes/shape_circle_2.svg'
import Image from 'next/image';
import Link from 'next/link';

const CommingSoon = () => {
  return (
    <section className="comming_soon_section decoration_wrap mouse_move overflow-hidden">
      <div className="container">
        <div className="site_logo">
          <Link className="site_link" href="/">
            <Image src={site_logo} alt="Site Logo - Paradox - Agency Template" />
          </Link>
        </div>
        <ul className="countdown_timer unordered_list_center" data-countdown="2023/7/24"></ul>
        <h1 className="title_text">{`We're`} Coming! Stay with us</h1>
        <div className="form-group mb-0 subscribe_form">
          <label htmlFor="input_email" className="form-label">
            <i className="fas fa-envelope"></i>
          </label>
          <input id="input_email" className="form-control" type="email" name="email" placeholder="Your Address" required />
          <button type="submit" className="bd-btn-link btn_warning">
            <span className="bd-button-content-wrapper">
              <span className="bd-button-icon">
                <i className="fa-light fa-arrow-right-long"></i>
              </span>
              <span className="pd-animation-flip">
                <span className="bd-btn-anim-wrapp">
                  <span className="bd-button-text">Subscribe Now</span>
                  <span className="bd-button-text">Subscribe Now</span>
                </span>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div className="deco_item shape_1 wow fadeInDown" data-wow-delay=".1s">
        <Image className="layer" src={shape_circle} data-depth="0.2" alt="Paradox - Shape Image" />
      </div>
      <div className="deco_item shape_2 wow fadeInUp" data-wow-delay=".1s">
        <Image className="layer" src={shape_circle_1} data-depth="0.2" alt="Paradox - Shape Image" />
      </div>
      <div className="deco_item shape_3 wow fadeInRight" data-wow-delay=".1s">
        <Image className="layer" src={shape_1} data-depth="0.2" alt="Paradox - Shape Image" />
      </div>
      <div className="deco_item shape_4 wow fadeInUp" data-wow-delay=".1s">
        <Image className="layer" src={shape_circle_half_1} data-depth="0.2" alt="Paradox - Shape Image" />
      </div>
      <div className="deco_item shape_5 wow zoomIn" data-wow-delay=".1s">
        <Image className="layer" src={shape_circle_2} data-depth="0.2" alt="Paradox - Shape Image" />
      </div>
    </section>
  );
};

export default CommingSoon;