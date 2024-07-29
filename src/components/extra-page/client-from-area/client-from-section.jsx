import React from 'react';

const ClientFromSection = () => {
  return (
    <section className="client_form_section section_space_lg">
      <div className="container">
        <div className="form_box">
          <h2 className="form_title">
            Howdy, <span className="focus_title">Paradox.</span> Team!
          </h2>
          <div className="row">
            <div className="col col-md-6">
              <div className="form-group m-0">
                <label htmlFor="input_name" className="form-label">Your Name<sup className="form_required_indicator">*</sup></label>
                <input id="input_name" className="form-control" type="text" name="name" placeholder="Your Name" required />
              </div>
            </div>
            <div className="col col-md-6">
              <div className="form-group m-0">
                <label htmlFor="input_email" className="form-label">Email Address<sup className="form_required_indicator">*</sup></label>
                <input id="input_email" className="form-control" type="email" name="email" placeholder="Your Address" required />
              </div>
            </div>
            <div className="col col-md-6">
              <div className="select_option m-0">
                <label className="form-label">Select Service<sup className="form_required_indicator">*</sup></label>
                <select className='nice-select'>
                  <option data-display="Select Service">Select Service</option>
                  <option defaultValue="development">Website Development</option>
                  <option defaultValue="design">UX/UI Design</option>
                  <option defaultValue="development">App Development</option>
                  <option defaultValue="editing">Video Editing</option>
                  <option defaultValue="programming">Programming & Tech</option>
                  <option defaultValue="business">Business Consuting</option>
                </select>
              </div>
            </div>
            <div className="col col-md-6">
              <div className="select_option m-0">
                <label className="form-label">Select Budget<sup className="form_required_indicator">*</sup></label>
                <select className='nice-select'>
                  <option data-display="Select Budget">Select Budget</option>
                  <option defaultValue="100">100</option>
                  <option defaultValue="400">400</option>
                  <option defaultValue="600">600</option>
                  <option defaultValue="1000">1000</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label className="form-label">Project Brief<sup className="form_required_indicator">*</sup></label>
                <textarea id="input_project_brief" className="form-control" name="description" placeholder="Start Typing Here..." required></textarea>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFromSection;