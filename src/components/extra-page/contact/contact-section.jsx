import NiceSelect from '@ui/niceSelect';
import Link from 'next/link';
import React from 'react';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const selectHandler = e => {}

  return (
    <section className="contact_section section_space_lg">
      <div className="container">
        <div className="section_heading">
          <h2 className="heading_subtitle text-uppercase">
            <span className="double_icon">
              <i className="fas fa-sharp fa-square-full"></i>
              <i className="fas fa-sharp fa-square-full"></i>
            </span>
            <span>Contact Us</span>
          </h2>
          <h3 className="heading_title mb-0">Feel Free Contact Us</h3>
        </div>
        <div className="row">
          <div className="col col-lg-6">
            <div className="contact_form">
              <form onSubmit={handleSubmit} action="#">
                <div className="row">
                  <div className="col col-md-6">
                    <div className="form-group m-0">
                      <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="form-group m-0">
                      <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="form-group m-0">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="select_option m-0">
                      <NiceSelect
                        options={[
                          { value: "Select Subject", text: "Select Subject" },
                          {
                            value: "Website Development",
                            text: "Website Development",
                          },
                          { value: "UX/UI Design", text: "UX/UI Design" },
                          { value: "App Development", text: "App Development" },
                          { value: "Video Editing", text: "Video Editing" },
                          {
                            value: "Programming & Tech",
                            text: "Programming & Tech",
                          },
                          {
                            value: "Business Consuting",
                            text: "Business Consuting",
                          },
                        ]}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        name="Select Subject"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Write your Message"
                      ></textarea>
                    </div>
                    <button type="submit" className="bd-btn-link">
                      <span className="bd-button-content-wrapper">
                        <span className="bd-button-icon">
                          <i className="fa-light fa-arrow-right-long"></i>
                        </span>
                        <span className="pd-animation-flip">
                          <span className="bd-btn-anim-wrapp">
                            <span className="bd-button-text">Send Now</span>
                            <span className="bd-button-text">Send Now</span>
                          </span>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col col-lg-6">
            <ul className="contact_info_list style_2 ps-lg-4 unordered_list_block">
              <li>
                <strong>Loaction:</strong>
                <span>1989 Timber Ridge Road Sacramento CA, California</span>
              </li>
              <li>
                <strong>Phone:</strong>
                <span>+1-202-555-0149</span>
              </li>
              <li>
                <strong>Email:</strong>
                <span>contact@paradox.com</span>
              </li>
              <li>
                <strong>Opening:</strong>
                <span>10am - 6pm, Friday Close</span>
              </li>
              <li>
                <strong>Follow Us:</strong>
                <ul className="social_icon unordered_list">
                  <li>
                    <Link href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/" target="_blank">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;