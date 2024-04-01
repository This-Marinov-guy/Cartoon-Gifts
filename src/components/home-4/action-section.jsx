import React from 'react';
import shape_2 from '@assets/images/shapes/shape_2.svg'
import shape_3 from '@assets/images/shapes/shape_3.svg'
import cta_image from '@assets/images/calltoaction/cta_image_4.png'
import Image from 'next/image';


const ActionSection = () => {
  return (
    <section className="calltoaction_section style_4 section_space_lg bg_primary decoration_wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-6 order-last">
            <div className="cta_image">
              <Image src={cta_image} style={{ width: "100%", height: "100%" }} alt="Paradox Call To Action Image" />
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="calltoaction_wrapper mb-4 mb-lg-0">
              <div className="section_heading text-white">
                <h2 className="heading_title mb-0">
                  Subscribe to Paradox Newsletter
                </h2>
              </div>
              <div className="form-group m-0 subscribe_form is-cta">
                <label htmlFor="input_email_2" className="form-label">
                  <i className="fas fa-envelope"></i>
                </label>
                <input id="input_email_2" className="form-control" type="email" name="email" placeholder="Enter your Email Address" />
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
          </div>
        </div>
      </div>
      <div className="deco_item shape_1">
        <Image className="wow fadeInLeft" data-wow-delay=".2s" src={shape_2} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
      </div>
      <div className="deco_item shape_2">
        <Image className="wow fadeInRight" data-wow-delay=".2s" src={shape_3} style={{ width: "100%", height: "100%" }} alt="PParadox Illustration Image" />
      </div>
    </section>
  );
};

export default ActionSection;