import NiceSelect from '@ui/niceSelect';
import React from 'react';

const ContactSection = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const selectHandler = e => {}

  return (
    <section className="contact_section section_space_lg">
      <div className="container">
        <div className="row">
          <div className="col col-lg-6">
            <div className="contact_form p-0 bg-transparent">
              <form onSubmit={handleSubmit} action="#">
                <div className="form-group_wrapper mb-4 mb-lg-0">
                  <div className="row">
                    <div className="col col-md-6">
                      <div className="form-group m-0">
                        <input className="form-control" type="text" name="firstname" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form-group m-0">
                        <input className="form-control" type="text" name="lastname" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form-group m-0">
                        <input className="form-control" type="email" name="email" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="select_option m-0">
                        <NiceSelect
                          options={[
                            { value: "Select Subject", text: "Select Subject" },
                            { value: "Website Development", text: "Website Development" },
                            { value: "UX/UI Design", text: "UX/UI Design" },
                            { value: "App Development", text: "App Development" },
                            { value: "Video Editing", text: "Video Editing" },
                            { value: "Programming & Tech", text: "Programming & Tech" },
                            { value: "Business Consuting", text: "Business Consuting" },
                          ]}
                          defaultCurrent={0}
                          onChange={selectHandler}
                          name="Select Subject"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <textarea className="form-control" name="message" placeholder="Write your Message"></textarea>
                      </div>

                      <button type="submit" className="bd-btn-link btn_primary">
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
                </div>
              </form>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="ps-lg-3">
              <div className="section_heading mb-5">
                <h2 className="heading_subtitle text-uppercase">
                  <span className="double_icon">
                    <i className="fas fa-sharp fa-square-full"></i>
                    <i className="fas fa-sharp fa-square-full"></i>
                  </span>
                  <span>Contact Me</span>
                </h2>
                <h3 className="heading_title">
                  Feel Free Get In touch with Gary
                </h3>
                <p className="heading_description mb-0">
                  {`I'm`} a digital marketer specializing in strategy & account management for enterprise brands. I love taking exciting projects.
                </p>
              </div>
              <ul className="contact_info_list unordered_list_block">
                <li>
                  <strong>Email:</strong>
                  <span>gary@paradox.com</span>
                </li>
                <li>
                  <strong>Phone:</strong>
                  <span>+12024463369</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;