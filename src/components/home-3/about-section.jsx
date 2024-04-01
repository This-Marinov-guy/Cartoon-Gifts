import React from 'react';
import about_image from '@assets/images/about/about_image_4.png';
import shape_circle from '@assets/images/shapes/shape_circle_6.svg';
import Image from 'next/image';

const AboutSection = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section className="about_section section_space_lg pt-0">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col col-xxl-6 col-xl-6 col-lg-6 order-lg-last">
            <div className="about_image decoration_wrap mb-4 mb-lg-0 text-center">
              <Image src={shape_circle} style={{ width: "100%", height: "100%" }} alt="Paradox Shape Image" />
              <div className="deco_item shape_3">
                <Image className="wow fadeInRight amin-up-down" data-wow-delay=".1s" src={about_image} style={{ width: "100%", height: "100%" }} alt="Paradox - About Image" />
              </div>
            </div>
          </div>
          <div className="co col-xxl-5  col-xl-6 col-lg-6">
            <div className="about_content">
              <div className="section_heading mb-5">
                <h2 className="heading_subtitle text-uppercase">
                  <span className="double_icon">
                    <i className="fas fa-sharp fa-square-full"></i>
                    <i className="fas fa-sharp fa-square-full"></i>
                  </span>
                  <span>Get In Touch</span>
                </h2>
                <h3 className="heading_title">
                  Subscribe to Paradox Newsletter
                </h3>
                <p className="heading_description mb-0">
                  Our action plan is focused and planned. We are result oriented organization and are committed.
                </p>
              </div>
              <div className="subscribe_form_2">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col col-md-6">
                      <div className="form-group m-0">
                        <label className="input_icon"><i className="fas fa-user"></i></label>
                        <input className="form-control" type="text" name="firstname" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form-group m-0">
                        <label className="input_icon"><i className="fas fa-envelope"></i></label>
                        <input className="form-control" type="text" name="firstname" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col">
                      <button type="submit" className="bd-btn-link btn_primary">
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
                      <div className="alert_text">*We will Notify only on Major Update</div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;