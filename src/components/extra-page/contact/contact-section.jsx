import React, { useState, useEffect, useRef } from 'react';
import SuccessComp from '@components/common/success/SuccessComp';
import Link from 'next/link';
import emailjs from "emailjs-com";
import { useToast } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation';

const ContactSection = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [mathQuestion, setMathQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
  const [mathAnswer, setMathAnswer] = useState('');
  const [mathError, setMathError] = useState('');
  const formStartTime = useRef(Date.now());
  const toast = useToast()
  const { t } = useTranslation('components');

  // Generate a simple math question
  const generateMathQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1; // 1-10
    const num2 = Math.floor(Math.random() * 10) + 1; // 1-10
    const answer = num1 + num2;
    setMathQuestion({ num1, num2, answer });
    setMathAnswer('');
    setMathError('');
  };

  // Generate math question on component mount
  useEffect(() => {
    generateMathQuestion();
    formStartTime.current = Date.now();
  }, []);

  // Reset form when success state changes
  useEffect(() => {
    if (isSuccess) {
      generateMathQuestion();
      formStartTime.current = Date.now();
    }
  }, [isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if form was submitted too quickly (less than 3 seconds)
    const timeSpent = (Date.now() - formStartTime.current) / 1000; // in seconds
    const MINIMUM_TIME = 3; // minimum 3 seconds
    
    if (timeSpent < MINIMUM_TIME) {
      toast({
        title: t('extra-page.contact-section.submitTooFast') || 'Please take your time filling out the form',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Validate math answer
    const userAnswer = parseInt(mathAnswer);
    if (isNaN(userAnswer) || userAnswer !== mathQuestion.answer) {
      setMathError(t('extra-page.contact-section.incorrectAnswer') || 'Incorrect answer. Please try again.');
      toast({
        title: t('extra-page.contact-section.incorrectAnswer') || 'Incorrect answer. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      generateMathQuestion(); // Generate new question
      return;
    }

    // Clear any previous errors
    setMathError('');

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
                      <div className="form-group m-0" style={{ marginTop: '15px' }}>
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '8px', 
                          fontSize: '14px',
                          fontWeight: '500'
                        }}>
                          {t('extra-page.contact-section.mathQuestion') || 'Security Question'}: {mathQuestion.num1} + {mathQuestion.num2} = ?
                        </label>
                        <input
                          className={`form-control ${mathError ? 'error-border' : ''}`}
                          type="number"
                          value={mathAnswer}
                          onChange={(e) => {
                            setMathAnswer(e.target.value);
                            setMathError('');
                          }}
                          placeholder={t('extra-page.contact-section.enterAnswer') || 'Enter answer'}
                          required
                          style={{ maxWidth: '200px' }}
                        />
                        {mathError && (
                          <small style={{ color: '#e53e3e', display: 'block', marginTop: '5px' }}>
                            {mathError}
                          </small>
                        )}
                      </div>
                      <button type="submit" className="bd-btn-link" style={{ marginTop: '15px' }}>
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