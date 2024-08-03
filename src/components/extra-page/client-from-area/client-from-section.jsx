import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ClientFromSection = () => {
    const { t } = useTranslation('components');
  return (
    <section className="client_form_section section_space_lg">
      <div className="container">
        <div className="form_box">
          <h2 className="form_title">
            {t('extra-page.client-from-area.client-from-section.howdy')} <span className="focus_title">Paradox.</span> {t('extra-page.client-from-area.client-from-section.team')}
          </h2>
          <div className="row">
            <div className="col col-md-6">
              <div className="form-group m-0">
                <label htmlFor="input_name" className="form-label">{t('extra-page.client-from-area.client-from-section.yourName')}<sup className="form_required_indicator">*</sup></label>
                <input id="input_name" className="form-control" type="text" name="name" placeholder={t('extra-page.client-from-area.client-from-section.yourName')} required />
              </div>
            </div>
            <div className="col col-md-6">
              <div className="form-group m-0">
                <label htmlFor="input_email" className="form-label">{t('extra-page.client-from-area.client-from-section.emailAddress')}<sup className="form_required_indicator">*</sup></label>
                <input id="input_email" className="form-control" type="email" name="email" placeholder={t('extra-page.client-from-area.client-from-section.emailAddress')} required />
              </div>
            </div>
            <div className="col col-md-6">
              <div className="select_option m-0">
                <label className="form-label">{t('extra-page.client-from-area.client-from-section.selectService')}<sup className="form_required_indicator">*</sup></label>
                <select className='nice-select'>
                  <option data-display={t('extra-page.client-from-area.client-from-section.selectService')}>{t('extra-page.client-from-area.client-from-section.selectService')}</option>
                  <option defaultValue="development">{t('extra-page.client-from-area.client-from-section.websiteDevelopment')}</option>
                  <option defaultValue="design">{t('extra-page.client-from-area.client-from-section.uxUiDesign')}</option>
                  <option defaultValue="development">{t('extra-page.client-from-area.client-from-section.appDevelopment')}</option>
                  <option defaultValue="editing">{t('extra-page.client-from-area.client-from-section.videoEditing')}</option>
                  <option defaultValue="programming">{t('extra-page.client-from-area.client-from-section.programmingTech')}</option>
                  <option defaultValue="business">{t('extra-page.client-from-area.client-from-section.businessConsulting')}</option>
                </select>
              </div>
            </div>
            <div className="col col-md-6">
              <div className="select_option m-0">
                <label className="form-label">{t('extra-page.client-from-area.client-from-section.selectBudget')}<sup className="form_required_indicator">*</sup></label>
                <select className='nice-select'>
                  <option data-display="Select Budget">{t('extra-page.client-from-area.client-from-section.selectBudget')}</option>
                  <option defaultValue="100">100</option>
                  <option defaultValue="400">400</option>
                  <option defaultValue="600">600</option>
                  <option defaultValue="1000">1000</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label className="form-label">{t('extra-page.client-from-area.client-from-section.projectBrief')}<sup className="form_required_indicator">*</sup></label>
                <textarea id="input_project_brief" className="form-control" name="description" placeholder={t('extra-page.client-from-area.client-from-section.startTypingHere')} required></textarea>
              </div>
              <button type="submit" className="bd-btn-link">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">{t('extra-page.client-from-area.client-from-section.submitNow')}</span>
                      <span className="bd-button-text">{t('extra-page.client-from-area.client-from-section.submitNow')}</span>
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