import React from 'react';

import banner_image from '@assets/images/banner/register_banner_image_1.png'
import shape_circle_dashed_2 from '@assets/images/shapes/shape_circle_dashed_2.png'
import shape_circle_half_1 from '@assets/images/shapes/shape_circle_half_1.svg'
import site_logo_dark from '@assets/images/logo/logo-title.png'
import shape_1 from '@assets/images/shapes/shape_1.svg'
import shape_circle_2 from '@assets/images/shapes/shape_circle_2.svg'
import Image from 'next/image';
import Link from 'next/link';



const SigninSection = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="register_section overflow-hidden">
      <div className="column decoration_wrap">
        <div className="inner"></div>
        <Image src={banner_image} alt="Paradox Iillustration Image" />
        <div className="deco_item shape_1 wow fadeInDown" data-wow-delay=".1s">
          <Image src={shape_circle_dashed_2} alt="Paradox - Shape Image" />
        </div>
        <div className="deco_item shape_2 wow fadeInUp" data-wow-delay=".1s">
          <Image src={shape_circle_half_1} style={{ width: "100%", height: "100%" }} alt="Paradox - Shape Image" />
        </div>
      </div>
      <div className="column decoration_wrap">
        <div className="register_form_wrap ms-lg-0">
          <div className="site_logo">
            <Link className="site_link" href="/">
              <Image src={site_logo_dark} alt="Site Logo - Paradox - Agency Template" />
            </Link>
          </div>
          <h2 className="form_title">Welcome Back!</h2>
          <p>Enter the information below to signin your account</p>
          <form onClick={handleSubmit} action="#">
            <div className="form-group">
              <label htmlFor="input_email" className="form-label">Email Address<sup className="form_required_indicator">*</sup></label>
              <input id="input_email" className="form-control" type="email" name="email" placeholder="Your Address" required />
            </div>
            <div className="form-group">
              <label htmlFor="input_pass" className="form-label">Enter Password<sup className="form_required_indicator">*</sup></label>
              <input id="input_pass" className="form-control" type="text" name="password" placeholder="Enter Password" required />
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="form-check mb-0">
                <input type="checkbox" id="check_remember_me" />
                <label htmlFor="check_remember_me">Remember me</label>
              </div>
              <Link className="link_forgot_pass" href="#!">Forgot Password?</Link>
            </div>
            <button type="submit" className="bd-btn-link">
              <span className="bd-button-content-wrapper">
                <span className="bd-button-icon">
                  <i className="fa-light fa-arrow-right-long"></i>
                </span>
                <span className="pd-animation-flip">
                  <span className="bd-btn-anim-wrapp">
                    <span className="bd-button-text">Sign In</span>
                    <span className="bd-button-text">Sign In</span>
                  </span>
                </span>
              </span>
            </button>

          </form>
          <p className="mb-0">Don’t have an Account? <Link href="/signup">Sign Up</Link></p>
        </div>

        <div className="deco_item shape_3 wow fadeInRight" data-wow-delay=".1s">
          <Image src={shape_1} alt="Paradox - Shape Image" />
        </div>
        <div className="deco_item shape_4 wow zoomIn" data-wow-delay=".1s">
          <Image src={shape_circle_2} alt="Paradox - Shape Image" />
        </div>
      </div>
    </section>
  );
};

export default SigninSection;