import Link from 'next/link';
import React from 'react';

const FaqQuestion = () => {
  return (
    <section className="faq_section section_space_lg bg_light">
      <div className="container">
        <div className="row">
          <div className="col col-lg-4">
            <div className="faq_content mb-4 mb-lg-0">
              <div className="section_heading mb-lg-0">
                <h2 className="heading_title">
                  Need to know User Common Questions?
                </h2>
              </div>
            </div>
          </div>
          <div className="col col-lg-8">
            <div className="accordion_wrap" id="faq_accordion">
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_one">
                  <button className="accordion_button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true" aria-controls="collapse_one">
                    Can I get a digital delivery
                  </button>
                </h3>
                <div id="collapse_one" className="accordion-collapse collapse show" aria-labelledby="heading_one" data-bs-parent="#faq_accordion">
                  <div className="accordion_body">
                    <p className="m-0">
                      Of course - we offer 100% digital delivery absolutely FREE and as fast as possible! Just make sure you submit a correct email address.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_two">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false" aria-controls="collapse_two">
                    How do I pay
                  </button>
                </h3>
                <div id="collapse_two" className="accordion-collapse collapse" aria-labelledby="heading_two" data-bs-parent="#faq_accordion">
                  <div className="accordion_body">
                    <p className="m-0">
                      Once you submit all the details, a checkout window will be opened for you to pay. We have integrated lots of different ways to ease the process.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_three">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false" aria-controls="collapse_three">
                    What if I do not like the cartoon
                  </button>
                </h3>
                <div id="collapse_three" className="accordion-collapse collapse" aria-labelledby="heading_three" data-bs-parent="#faq_accordion">
                  <div className="accordion_body">
                    <p className="m-0">
                      If you do not like what we have sent you, you can always make a request for change and we will handle it immediately until you are satisfied. Our customers are always right!
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_four">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false" aria-controls="collapse_four">
                    How to cancel my order
                  </button>
                </h3>
                <div id="collapse_four" className="accordion-collapse collapse" aria-labelledby="heading_four" data-bs-parent="#faq_accordion">
                  <div className="accordion_body">
                    <p className="m-0">
                      We are sorry to hear that you want to cancel your order - just send us an email with your order number and we will handle it immediately
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

export default FaqQuestion;