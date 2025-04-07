import React, { useState } from 'react';
import SuccessComp from '@components/common/success/SuccessComp';
import Link from 'next/link';
import emailjs from "emailjs-com";
import { useToast } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation';

const ContactSection = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const toast = useToast()
  const { t } = useTranslation('components');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
        e.target,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsSuccess(true);
        },
        (error) => toast({
          title: t('extra-page.contact-section.sendEmailError'),
          status: 'error',
          duration: 8000,
          isClosable: true,
        })
      ).catch(() => toast({
        title: t('extra-page.contact-section.sendEmailError'),
        status: 'error',
        duration: 8000,
        isClosable: true,
      }));
  }

  return (
    <section className="contact_section section_space_lg">
      <div className="container">
        <div className="section_heading">
          <h2 className="heading_subtitle text-uppercase">
            <span className="double_icon">
              <i className="fas fa-sharp fa-square-full"></i>
              <i className="fas fa-sharp fa-square-full"></i>
            </span>
            <span>{t("extra-page.contact-section.contactUs")}</span>
          </h2>
          <h3 className="heading_title mb-0">
            {t("extra-page.contact-section.feelFreeContactUs")}
          </h3>
        </div>
        <div className="row">
          <div className="col col-lg-6">
            <div className="contact_form">
              {isSuccess ? (
                <SuccessComp
                  title={t("extra-page.contact-section.messageSubmitted")}
                  description={t(
                    "extra-page.contact-section.thanksForSubmitting"
                  )}
                  active={isSuccess}
                />
              ) : (
                <form onSubmit={handleSubmit} action="#">
                  <div className="row">
                    <div className="col col-md-6">
                      <div className="form-group m-0">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder={t("extra-page.contact-section.yourName")}
                        />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form-group m-0">
                        <input
                          className="form-control"
                          type="text"
                          name="subject"
                          placeholder={t("extra-page.contact-section.subject")}
                        />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form-group m-0">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder={t(
                            "extra-page.contact-section.emailAddress"
                          )}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder={t(
                            "extra-page.contact-section.writeYourMessage"
                          )}
                        ></textarea>
                      </div>
                      <button type="submit" className="bd-btn-link">
                        <span className="bd-button-content-wrapper">
                          <span className="bd-button-icon">
                            <i className="fa-light fa-arrow-right-long"></i>
                          </span>
                          <span className="pd-animation-flip">
                            <span className="bd-btn-anim-wrapp">
                              <span className="bd-button-text">
                                {t("extra-page.contact-section.sendNow")}
                              </span>
                              <span className="bd-button-text">
                                {t("extra-page.contact-section.sendNow")}
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
          <div className="col col-lg-6">
            <ul className="contact_info_list style_2 ps-lg-4 unordered_list_block">
              <li>
                <strong>{t("extra-page.contact-section.location")}:</strong>
                <span>Aleksandrovska 111, Burgas, Bulgaria</span>
              </li>
              <li>
                <strong>{t("extra-page.contact-section.email")}:</strong>
                <span>cartoongifts.eu@gmail.com</span>
              </li>
              <li>
                <strong>{t("extra-page.contact-section.followUs")}:</strong>
                <ul className="social_icon unordered_list">
                  <li>
                    <Link
                      href="https://www.facebook.com/cartoongiftsbulgaria1/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/cartoongiftsbulgaria/?hl=en"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;