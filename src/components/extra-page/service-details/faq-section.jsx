import Link from 'next/link';
import React from 'react';

const FaqSection = () => {
  return (
    <section className="faq_section section_space_lg">
      <div className="container">
        <div className="row">
          <div className="col col-lg-4">
            <div className="details_sectio_content mb-4 mb-lg-0">
              <div className="section_heading">
                <h2 className="heading_title">
                  Need to know User Common Questions
                </h2>
              </div>
              <Link href="/pricing" className="bd-btn-link btn_primary">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">Need to Know More</span>
                      <span className="bd-button-text">Need to Know More</span>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col col-lg-8">
            <div className="accordion_wrap" id="faq_accordion">
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_one">
                  <button className="accordion_button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true" aria-controls="collapse_one">
                    How much does a new website cost?
                  </button>
                </h3>
                <div id="collapse_one" className="accordion-collapse collapse show" aria-labelledby="heading_one" data-bs-parent="#faq_accordion">
                  <div className="accordion_body">
                    <p className="m-0">
                      Regular maintenance is essential for a website to stabilize its flexibility and reliability. Proper maintenance would help in ensuring your <Link href="/policy-privacy">website’s security</Link>, invite new visitors, boost traffic and more. Of course, we can help you out with proper and professional website maintenance in addition to development as it supports
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_two">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false" aria-controls="collapse_two">
                    Will you maintain my site for me?
                  </button>
                </h3>
                <div id="collapse_two" className="accordion-collapse collapse" aria-labelledby="heading_two" data-bs-parent="#faq_accordion">
                  <div className="accordion_body">
                    <p className="m-0">
                      Regular maintenance is essential for a website to stabilize its flexibility and reliability. Proper maintenance would help in ensuring your <Link href="/policy-privacy">website’s security</Link>, invite new visitors, boost traffic and more. Of course, we can help you out with proper and professional website maintenance in addition to development as it supports
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_three">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false" aria-controls="collapse_three">
                    Will my website be mobile-friendly?
                  </button>
                </h3>
                <div id="collapse_three" className="accordion-collapse collapse" aria-labelledby="heading_three" data-bs-parent="#faq_accordion">
                  <div className="accordion_body">
                    <p className="m-0">
                      Regular maintenance is essential for a website to stabilize its flexibility and reliability. Proper maintenance would help in ensuring your <Link href="/policy-privacy">website’s security</Link>, invite new visitors, boost traffic and more. Of course, we can help you out with proper and professional website maintenance in addition to development as it supports
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_four">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false" aria-controls="collapse_four">
                    What if I need help on my site down the road?
                  </button>
                </h3>
                <div id="collapse_four" className="accordion-collapse collapse" aria-labelledby="heading_four" data-bs-parent="#faq_accordion">
                  <div className="accordion_body">
                    <p className="m-0">
                      Regular maintenance is essential for a website to stabilize its flexibility and reliability. Proper maintenance would help in ensuring your <Link href="/policy-privacy">website’s security</Link>, invite new visitors, boost traffic and more. Of course, we can help you out with proper and professional website maintenance in addition to development as it supports
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;