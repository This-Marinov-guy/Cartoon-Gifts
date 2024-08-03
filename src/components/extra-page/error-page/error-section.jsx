import React from 'react';
import error_img from '@assets/images/bg/error.png'
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';


const ErrorSection = () => {
    const { t } = useTranslation('components');
  return (
    <section className="error_section text-center mouse_move">
      <div className="container">
        <div className="error_image decoration_wrap text-center">
          <Image src={error_img} style={{ width: "100%", height: "100%" }} alt={t('extra-page.error-page.errorImageAlt')} />
        </div>
        <div className="error_content">
          <h1>{t('extra-page.error-page.pageNotFound')}</h1>
          <p>
            {t('extra-page.error-page.urlNotFound')} <span className="d-md-block">{t('extra-page.error-page.urlNotFoundContinuation')}</span>
          </p>
          <Link href="/" className="bd-btn-link btn_primary">
            <span className="bd-button-content-wrapper">
              <span className="bd-button-icon">
                <i className="fa-light fa-arrow-right-long"></i>
              </span>
              <span className="pd-animation-flip">
                <span className="bd-btn-anim-wrapp">
                  <span className="bd-button-text">{t('extra-page.error-page.goBackToHome')}</span>
                  <span className="bd-button-text">{t('extra-page.error-page.goBackToHome')}</span>
                </span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;