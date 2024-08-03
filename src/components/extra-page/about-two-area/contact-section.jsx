import NiceSelect from '@ui/niceSelect';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ContactSection = () => {
    const { t } = useTranslation('components');

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
                        <input className="form-control" type="text" name="firstname" placeholder={t('extra-page.about-two-area.contactSection.firstName')} />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form-group m-0">
                        <input className="form-control" type="text" name="lastname" placeholder={t('extra-page.about-two-area.contactSection.lastName')} />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form-group m-0">
                        <input className="form-control" type="email" name="email" placeholder={t('extra-page.about-two-area.contactSection.emailAddressTitle')}  />
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
                          name={t('extra-page.about-two-area.contactSection.selectSubject')}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <textarea className="form-control" name="message" placeholder={t('extra-page.about-two-area.contactSection.messagePlaceholder')}></textarea>
                      </div>

                      <button type="submit" className="bd-btn-link btn_primary">
                        <span className="bd-button-content-wrapper">
                          <span className="bd-button-icon">
                            <i className="fa-light fa-arrow-right-long"></i>
                          </span>
                          <span className="pd-animation-flip">
                            <span className="bd-btn-anim-wrapp">
                              <span className="bd-button-text">{t('extra-page.about-two-area.contactSection.sendNow')}</span>
                              <span className="bd-button-text">{t('extra-page.about-two-area.contactSection.sendNow')}</span>
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
                  <span>{t('extra-page.about-two-area.contactSection.contactMe')}</span>
                </h2>
                <h3 className="heading_title">
                    {t('extra-page.about-two-area.contactSection.feelFree')}
                </h3>
                <p className="heading_description mb-0">
                    {t('extra-page.about-two-area.contactSection.intro')}
                </p>
              </div>
              <ul className="contact_info_list unordered_list_block">
                <li>
                  <strong>{t('extra-page.about-two-area.contactSection.email')}:</strong>
                  <span>{t('extra-page.about-two-area.contactSection.emailAddress')}</span>
                </li>
                <li>
                  <strong>{t('extra-page.about-two-area.contactSection.phone')}:</strong>
                  <span>{t('extra-page.about-two-area.contactSection.phoneNumber')}</span>
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