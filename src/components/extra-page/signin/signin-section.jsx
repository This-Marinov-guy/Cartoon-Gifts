import React, { useState } from 'react';
import shape_1 from '@assets/images/shapes/shape_1.svg'
import shape_circle_2 from '@assets/images/shapes/shape_circle_2.svg'
import Image from 'next/image';
import { Spinner } from '@chakra-ui/react'
import { useHttpClient } from '@hooks/use-http-request';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useToast } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation';

const SigninSection = () => {
  const router = useRouter();
  const { loading, sendRequest } = useHttpClient();
  const toast = useToast()
  const { t } = useTranslation('components');

  const [loginFormValues, setLoginFormValues] = useState({
    email: "",
    password: "",
  });

  const changeFormInputHandler = (event) => {
    setLoginFormValues((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await sendRequest(
        `api/user/log-in`,
        "POST",
        {
          email: loginFormValues.email,
          password: loginFormValues.password,
        },
      );

      if (response.status) {
        router.push('/');
        toast({
          title: t('extra-page.signin.welcomeBack'),
          status: 'success',
          duration: 8000,
          isClosable: true,
        })
      }
    } catch (err) { }
  }

  return (
    <section className="register_section overflow-hidden" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="column decoration_wrap p-20">
        <div className="register_form_wrap ms-lg-0">
          <Link href='/'>
            <i class="fa-solid fa-angles-left mr-5"></i>
            {t('extra-page.signin.backHome')}
          </Link>
          <h2 className="form_title">{t('extra-page.signin.welcomeBack')}!</h2>
          <p>{t('extra-page.signin.signinDescription')}</p>
          <form onSubmit={(event) => loginHandler(event)}
            action="#">
            <div className="form-group">
              <label htmlFor="input_email" className="form-label">{t('extra-page.signin.emailAddress')}<sup className="form_required_indicator">*</sup></label>
              <input onChange={(event) => changeFormInputHandler(event)}
                id="email" className="form-control" type="email" name="email" placeholder={t('extra-page.signin.yourAddress')} required />
            </div>
            <div className="form-group">
              <label htmlFor="input_pass" className="form-label">{t('extra-page.signin.enterPassword')}<sup className="form_required_indicator">*</sup></label>
              <input onChange={(event) => changeFormInputHandler(event)}
                id="password" className="form-control" type="password" name="password" placeholder={t('extra-page.signin.enterPassword')} required />
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <Link className="link_forgot_pass" href="#!">{t('extra-page.signin.forgotPassword')}?</Link>
            </div>
            <button disabled={loading} type="submit" className="bd-btn-link">
              {loading ? <Spinner /> : <span className="bd-button-content-wrapper">
                <span className="bd-button-icon">
                  <i className="fa-light fa-arrow-right-long"></i>
                </span>
                <span className="pd-animation-flip">
                  <span className="bd-btn-anim-wrapp">
                    <span className="bd-button-text">{t('extra-page.signin.signIn')}</span>
                    <span className="bd-button-text">{t('extra-page.signin.signIn')}</span>
                  </span>
                </span>
              </span>}
            </button>

          </form>
          <p className="mb-0">{t('extra-page.signin.dontHaveAccount')}? <Link href="/signup">{t('extra-page.signin.signUp')}</Link></p>
        </div>

        <div className="deco_item shape_3 wow fadeInRight" data-wow-delay=".1s">
          <Image src={shape_1} alt={t('extra-page.signin.shape1Alt')} />
        </div>
        <div className="deco_item shape_4 wow zoomIn" data-wow-delay=".1s">
          <Image src={shape_circle_2} alt={t('extra-page.signin.shapeCircleAlt')} />
        </div>
      </div>
    </section>
  );
};

export default SigninSection;