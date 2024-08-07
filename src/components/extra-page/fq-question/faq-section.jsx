import Link from 'next/link';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const FaqSection = () => {
    const { t } = useTranslation('components');
  return (
    <section className="faq_section section_space_lg">
      <div className="container">
        <div className="row">
          <div className="col col-lg-6">
            <div className="section_heading mb-4">
              <h2 className="heading_title mb-0">
                {t('extra-page.fq-question.faq-section.title')}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-6">
            <div className="accordion_wrap" id="faq_accordion_1">
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_one">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="false" aria-controls="collapse_one">
                    {t('extra-page.fq-question.faq-section.questions.q1.title')}
                  </button>
                </h3>
                <div id="collapse_one" className="accordion-collapse collapse" aria-labelledby="heading_one" data-bs-parent="#faq_accordion_1">
                  <div className="accordion_body">
                    <p className="m-0">
                        {t('extra-page.fq-question.faq-section.questions.q1.answer')} 
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_two">
                  <button className="accordion_button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="true" aria-controls="collapse_two">
                    {t('extra-page.fq-question.faq-section.questions.q2.title')}
                  </button>
                </h3>
                <div id="collapse_two" className="accordion-collapse collapse show" aria-labelledby="heading_two" data-bs-parent="#faq_accordion_1">
                  <div className="accordion_body">
                    <p className="m-0">
                      {t('extra-page.fq-question.faq-section.questions.q2.answer')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_three">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false" aria-controls="collapse_three">
                    {t('extra-page.fq-question.faq-section.questions.q3.title')}
                  </button>
                </h3>
                <div id="collapse_three" className="accordion-collapse collapse" aria-labelledby="heading_three" data-bs-parent="#faq_accordion_1">
                  <div className="accordion_body">
                    <p className="m-0">
                      {t('extra-page.fq-question.faq-section.questions.q3.answer')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_four">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false" aria-controls="collapse_four">
                    {t('extra-page.fq-question.faq-section.questions.q4.title')}
                  </button>
                </h3>
                <div id="collapse_four" className="accordion-collapse collapse" aria-labelledby="heading_four" data-bs-parent="#faq_accordion_1">
                  <div className="accordion_body">
                    <p className="m-0">
                      {t('extra-page.fq-question.faq-section.questions.q4.answer')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="accordion_wrap" id="faq_accordion_2">
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_five">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_five" aria-expanded="false" aria-controls="collapse_five">
                    {t('extra-page.fq-question.faq-section.questions.q5.title')}
                  </button>
                </h3>
                <div id="collapse_five" className="accordion-collapse collapse" aria-labelledby="heading_five" data-bs-parent="#faq_accordion_2">
                  <div className="accordion_body">
                    <p className="m-0">
                      {t('extra-page.fq-question.faq-section.questions.q5.answer')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_six">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_six" aria-expanded="false" aria-controls="collapse_six">
                    {t('extra-page.fq-question.faq-section.questions.q6.title')}
                  </button>
                </h3>
                <div id="collapse_six" className="accordion-collapse collapse" aria-labelledby="heading_six" data-bs-parent="#faq_accordion_2">
                  <div className="accordion_body">
                    <p className="m-0">
                      {t('extra-page.fq-question.faq-section.questions.q6.answer')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_seven">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_seven" aria-expanded="false" aria-controls="collapse_seven">
                    {t('extra-page.fq-question.faq-section.questions.q7.title')}
                  </button>
                </h3>
                <div id="collapse_seven" className="accordion-collapse collapse" aria-labelledby="heading_seven" data-bs-parent="#faq_accordion_2">
                  <div className="accordion_body">
                    <p className="m-0">
                      {t('extra-page.fq-question.faq-section.questions.q7.answer')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_eight">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_eight" aria-expanded="false" aria-controls="collapse_eight">
                    {t('extra-page.fq-question.faq-section.questions.q8.title')}
                  </button>
                </h3>
                <div id="collapse_eight" className="accordion-collapse collapse" aria-labelledby="heading_eight" data-bs-parent="#faq_accordion_2">
                  <div className="accordion_body">
                    <p className="m-0">
                      {t('extra-page.fq-question.faq-section.questions.q8.answer')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn_wrap pb-0 text-center">
          <Link href="/service" className="bd-btn-link btn_primary">
            <span className="bd-button-content-wrapper">
              <span className="bd-button-icon">
                <i className="fa-light fa-arrow-right-long"></i>
              </span>
              <span className="pd-animation-flip">
                <span className="bd-btn-anim-wrapp">
                  <span className="bd-button-text">{t('extra-page.fq-question.faq-section.button_text')}</span>
                  <span className="bd-button-text">{t('extra-page.fq-question.faq-section.button_text')}</span>
                </span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;