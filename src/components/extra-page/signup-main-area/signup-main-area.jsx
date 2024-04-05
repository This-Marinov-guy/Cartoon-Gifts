import React from 'react';

import banner_image from '@assets/images/banner/register_banner_image_1.png'
import shape_circle_dashed_2 from '@assets/images/shapes/shape_circle_dashed_2.png'
import shape_circle_half_1 from '@assets/images/shapes/shape_circle_half_1.svg'
import site_logo_dark from '@assets/images/logo/logo-title.png'
import shape_1 from '@assets/images/shapes/shape_1.svg'
import shape_circle_2 from '@assets/images/shapes/shape_circle_2.svg'
import Image from 'next/image';
import Link from 'next/link';

const SignupMainArea = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <main>
      <section className="register_section">
        <div className="column decoration_wrap">
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
            <h2 className="form_title">Create an account</h2>
            <p>Enter the information below to create your account</p>
            <form onClick={handleSubmit} action="#">
              <div className="form-group">
                <label htmlFor="input_name" className="form-label">Your Name<sup className="form_required_indicator">*</sup></label>
                <input id="input_name" className="form-control" type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="input_email" className="form-label">Email Address<sup className="form_required_indicator">*</sup></label>
                <input id="input_email" className="form-control" type="email" name="email" placeholder="Your Address" required />
              </div>
              <div className="form-group">
                <label htmlFor="input_pass" className="form-label">Enter Password<sup className="form_required_indicator">*</sup></label>
                <input id="input_pass" className="form-control" type="text" name="password" placeholder="Enter Password" required />
              </div>
              <div className="form-check">
                <input type="checkbox" id="check_agree" />
                <label htmlFor="check_agree">I agree to the <Link href="/terms-conditions">Terms and Conditions</Link> of Privacy</label>
              </div>
              <button type="submit" className="bd-btn-link">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">Submit Now</span>
                      <span className="bd-button-text">Submit Now</span>
                    </span>
                  </span>
                </span>
              </button>
            </form>
            <p className="mb-0">Already have an account? <Link href="/signin">Sign In</Link></p>
          </div>

          <div className="deco_item shape_3 wow fadeInRight" data-wow-delay=".1s">
            <Image src={shape_1} alt="Paradox - Shape Image" />
          </div>
          <div className="deco_item shape_4 wow zoomIn" data-wow-delay=".1s">
            <Image src={shape_circle_2} alt="Paradox - Shape Image" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignupMainArea;