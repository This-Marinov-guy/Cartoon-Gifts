import Link from 'next/link';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const ContactSection = () => {
    const { t } = useTranslation('components');
  return (
    <section className="contact_section section_space_lg">
      <div className="container">
        <div className="row">
          <div className="col col-lg-6">
            <div className="gmap_canvas mb-3 mb-lg-0">
              <iframe id="gmap_canvas_iframe" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="ps-xl-4">
              <div className="section_heading">
                <h2 className="heading_subtitle text-uppercase">
                  <span className="double_icon">
                    <i className="fas fa-sharp fa-square-full"></i>
                    <i className="fas fa-sharp fa-square-full"></i>
                  </span>
                  <span>{t('extra-page.contact-two-area.contact-section.contactUs')}</span>
                </h2>
                <h3 className="heading_title mb-0">
                    {t('extra-page.contact-two-area.contact-section.sectionTitle')}
                </h3>
              </div>
              <ul className="contact_info_list style_2 unordered_list_block">
                <li>
                  <strong>{t('extra-page.contact-two-area.contact-section.locationLabel')}:</strong>
                  <span>{t('extra-page.contact-two-area.contact-section.location')}</span>
                </li>
                <li>
                  <strong>{t('extra-page.contact-two-area.contact-section.phoneLabel')}:</strong>
                  <span><Link href="tel:+1-202-555-0149">+1-202-555-0149</Link></span>
                </li>
                <li>
                  <strong>{t('extra-page.contact-two-area.contact-section.emailLabel')}:</strong>
                  <span><Link href="mailto:cartoongifts.eu@gmail.com">cartoongifts.eu@gmail.com</Link></span>
                </li>
                <li>
                  <strong>{t('extra-page.contact-two-area.contact-section.openingLabel')}:</strong>
                  <span>{t('extra-page.contact-two-area.contact-section.openingHours')}</span>
                </li>
                <li>
                  <strong>{t('extra-page.contact-two-area.contact-section.followUsLabel')}:</strong>
                  <ul className="social_icon unordered_list">
                  <li><Link href="https://www.facebook.com/cartoongiftsbulgaria1/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link href="https://www.instagram.com/cartoongiftsbulgaria/?hl=en" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                  </ul>
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