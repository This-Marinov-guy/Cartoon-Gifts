import React from 'react';
import shape_comment from '@assets/images/shapes/shape_comment.png'
import shape_man_1 from '@assets/images/shapes/shape_man_1.png'
import Image from 'next/image';
import NiceSelect from '@ui/niceSelect';
import useTranslation from 'next-translate/useTranslation';


const ContactFromSection = () => {
    const { t } = useTranslation('components');
  const handleSubmit =(event)=>{
    event.preventDefault()
  }
  const selectHandler = e => {}
  return (
    <section className="contact_form_section">
      <div className="container">
        <div className="contact_form_boxed bg_primary decoration_wrap">
          <div className="contact_form p-0 bg-transparent rounded-0">
            <div className="section_heading text-white">
              <h2 className="heading_subtitle text-uppercase">
                <span className="double_icon">
                  <i className="fas fa-sharp fa-square-full"></i>
                  <i className="fas fa-sharp fa-square-full"></i>
                </span>
                <span>{t('extra-page.contact-two-area.contact-from-section.contactUs')}</span>
              </h2>
              <h3 className="heading_title mb-0">
                {t('extra-page.contact-two-area.contact-from-section.sectionTitle')}
              </h3>
            </div>
            <form onSubmit={handleSubmit} action="#">
              <div className="row">
                <div className="col col-md-6">
                  <div className="form-group m-0">
                    <input className="form-control" type="text" name="firstname" placeholder={t('extra-page.contact-two-area.contact-from-section.firstNamePlaceholder')} />
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className="form-group m-0">
                    <input className="form-control" type="text" name="lastname" placeholder={t('extra-page.contact-two-area.contact-from-section.lastNamePlaceholder')} />
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className="form-group m-0">
                    <input className="form-control" type="email" name="email" placeholder={t('extra-page.contact-two-area.contact-from-section.emailPlaceholder')} />
                  </div>
                </div>
                <div className="col col-md-6">
                  <div className="select_option m-0">
                    <NiceSelect
                      options={[
                        { value: "Select Subject", text: t('extra-page.contact-two-area.contact-from-section.selectSubject') },
                        { value: "Website Development", text: t('extra-page.contact-two-area.contact-from-section.websiteDevelopment') },
                        { value: "UX/UI Design", text: t('extra-page.contact-two-area.contact-from-section.uxUiDesign') },
                        { value: "App Development", text: t('extra-page.contact-two-area.contact-from-section.appDevelopment') },
                        { value: "Video Editing", text: t('extra-page.contact-two-area.contact-from-section.videoEditing') },
                        { value: "Programming & Tech", text: t('extra-page.contact-two-area.contact-from-section.programmingTech') },
                        { value: "Business Consuting", text: t('extra-page.contact-two-area.contact-from-section.businessConsulting') },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name={t('extra-page.contact-two-area.contact-from-section.selectSubject')}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <textarea className="form-control" name="message" placeholder={t('extra-page.contact-two-area.contact-from-section.messagePlaceholder')}></textarea>
                  </div>

                  <button type="submit" className="bd-btn-link btn_warning">
                    <span className="bd-button-content-wrapper">
                      <span className="bd-button-icon">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </span>
                      <span className="pd-animation-flip">
                        <span className="bd-btn-anim-wrapp">
                          <span className="bd-button-text">{t('extra-page.contact-two-area.contact-from-section.sendNow')}</span>
                          <span className="bd-button-text">{t('extra-page.contact-two-area.contact-from-section.sendNow')}</span>
                        </span>
                      </span>
                    </span>
                  </button>

                </div>
              </div>
            </form>
          </div>
          <div className="deco_item shape_1 wow fadeInUp" data-wow-delay=".1s">
            <Image data-parallax='{"y" : -140, "smoothness": 10}' src={shape_comment} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration" />
          </div>
          <div className="deco_item shape_2 wow fadeInUp" data-wow-delay=".1s">
            <Image data-parallax='{"y" : -140, "smoothness": 10}' src={shape_man_1} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFromSection;