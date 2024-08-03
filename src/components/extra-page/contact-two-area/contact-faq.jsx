import Link from 'next/link';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ContactFaq = () => {
    const { t } = useTranslation('components');
  return (
    <section className="faq_section section_space_lg">
      <div className="container">
        <div className="row">
          <div className="col col-lg-4">
            <div className="section_heading mb-lg-0">
              <h2 className="heading_title">
                {t('extra-page.contact-two-area.contact_faq.section_title')}
              </h2>

              <Link href="/faq" className="bd-btn-link btn_primary">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">{t('extra-page.contact-two-area.contact_faq.button_text')}</span>
                      <span className="bd-button-text">{t('extra-page.contact-two-area.contact_faq.button_text')}</span>
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
                    {t('extra-page.contact-two-area.contact_faq.faq.question_1')}
                  </button>
                </h3>
                <div id="collapse_one" className="accordion-collapse collapse show" aria-labelledby="heading_one" data-bs-parent="#faq_accordion">
                  <div className="accordion_body">
                    <p className="m-0">
                        {t('extra-page.contact-two-area.contact_faq.faq.answer_1')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_two">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false" aria-controls="collapse_two">
                    {t('extra-page.contact-two-area.contact_faq.faq.question_2')}
                  </button>
                </h3>
                <div id="collapse_two" className="accordion-collapse collapse" aria-labelledby="heading_two" data-bs-parent="#faq_accordion">
                  <div className="accordion_body">
                    <p className="m-0">
                        {t('extra-page.contact-two-area.contact_faq.faq.answer_2')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_three">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false" aria-controls="collapse_three">
                    {t('extra-page.contact-two-area.contact_faq.faq.question_3')}
                  </button>
                </h3>
                <div id="collapse_three" className="accordion-collapse collapse" aria-labelledby="heading_three" data-bs-parent="#faq_accordion">
                  <div className="accordion_body">
                    <p className="m-0">
                        {t('extra-page.contact-two-area.contact_faq.faq.answer_3')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion_item">
                <h3 className="accordion_header m-0" id="heading_four">
                  <button className="accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false" aria-controls="collapse_four">
                    {t('extra-page.contact-two-area.contact_faq.faq.question_4')}
                  </button>
                </h3>
                <div id="collapse_four" className="accordion-collapse collapse" aria-labelledby="heading_four" data-bs-parent="#faq_accordion">
                  <div className="accordion_body">
                    <p className="m-0">
                        {t('extra-page.contact-two-area.contact_faq.faq.answer_4')}
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

export default ContactFaq;