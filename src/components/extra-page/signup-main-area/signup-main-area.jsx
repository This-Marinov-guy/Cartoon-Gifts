import React from 'react';
import banner_image from '@assets/images/logo/logo.png'
import shape_circle_dashed_2 from '@assets/images/shapes/shape_circle_dashed_2.png'
import shape_circle_half_1 from '@assets/images/shapes/shape_circle_half_1.svg'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup"; import shape_1 from '@assets/images/shapes/shape_1.svg'
import shape_circle_2 from '@assets/images/shapes/shape_circle_2.svg'
import Image from 'next/image';
import { Spinner, useToast } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useHttpClient } from '@hooks/use-http-request';
import useTranslation from 'next-translate/useTranslation';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, t('passwordLengthError'))
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,
      t('passwordRulesError')
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], t('passwordMatchError'))
    .required(t('passwordMatchError')),
  // check: yup.bool().required().oneOf([true], "Terms must be accepted")
});

const SignupMainArea = () => {
  const router = useRouter();
  const toast = useToast();
  const { loading, sendRequest } = useHttpClient();
    const { t } = useTranslation('components');

  return (
    <main>
      <section className="register_section">
        <div className="column decoration_wrap">
          <Image style={{ height: '60%', width: 'auto' }} src={banner_image} alt="Paradox Iillustration Image" />
          <div className="deco_item shape_1 wow fadeInDown" data-wow-delay=".1s">
            <Image src={shape_circle_dashed_2} alt="Paradox - Shape Image" />
          </div>
          <div className="deco_item shape_2 wow fadeInUp" data-wow-delay=".1s">
            <Image src={shape_circle_half_1} style={{ width: "100%", height: "100%" }} alt="Paradox - Shape Image" />
          </div>
        </div>
        <div className="column decoration_wrap">
          <div className="register_form_wrap ms-lg-0">
            <Link href='/'>
              <i class="fa-solid fa-angles-left mr-5"></i>
              {t('backHome')}
            </Link>
            <h2 className="form_title">{t('createAccount')}</h2>
            <p>{t('enterInformation')}</p>
            <Formik
              className="inner"
              validationSchema={schema}
              onSubmit={async (values) => {
                try {
                  const response = await sendRequest('/api/user/sign-up', "POST", values)

                  if (response.status) {
                    router.push('/login');
                    toast({
                      title: t('profileCreated'),
                      status: 'success',
                      duration: 8000,
                      isClosable: true,
                    })
                  }
                } catch (err) { }
              }}
              initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                // check: false
              }}
            >
              {() => (
                <Form className='row'>
                  <div className="col col-md-6 form-group">
                    <label htmlFor="input_name" className="form-label">{t('yourName')}</label>
                    <Field name='name' className="form-control" type="text" placeholder={t('yourName')} />
                    <ErrorMessage className="error" name="name" component="div" />
                  </div>
                  <div className="col col-md-6 form-group">
                    <label htmlFor="input_email" className="form-label">{t('emailAddress')}</label>
                    <Field name='email' className="form-control" type="email" placeholder={t('yourAddress')} />
                    <ErrorMessage className="error" name="email" component="div" />
                  </div>
                  <div className="col col-md-6 form-group">
                    <label htmlFor="input_pass" className="form-label">{t('enterPassword')}</label>
                    <Field name='password' className="form-control" type="password" placeholder={t('enterPassword')} />
                    <ErrorMessage className="error" name="password" component="div" />
                  </div>
                  <div className="col col-md-6 form-group">
                    <label htmlFor="input_pass" className="form-label">{t('confirmPassword')}</label>
                    <Field name='confirmPassword' className="form-control" type="password" placeholder={t('confirmPassword')} />
                    <ErrorMessage className="error" name="confirmPassword" component="div" />
                  </div>
                  {/* <div className="form-check">
                    <Field name='check' type="checkbox" id="check_agree" />
                    <label htmlFor="check_agree">I agree to the <Link href="/terms-conditions">Terms and Conditions</Link> of Privacy</label>
                    <ErrorMessage className="error" name="name" component="div"/>
                  </div> */}
                  <button disabled={loading} type="submit" className="bd-btn-link">
                    {loading ? <Spinner /> : <span className="bd-button-content-wrapper">
                      <span className="bd-button-icon">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </span>
                      <span className="pd-animation-flip">
                        <span className="bd-btn-anim-wrapp">
                          <span className="bd-button-text">{t('submitNow')}</span>
                          <span className="bd-button-text">{t('submitNow')}</span>
                        </span>
                      </span>
                    </span>}
                  </button>
                </Form>
              )}
            </Formik>

            <p className="mb-0">{t('alreadyHaveAccount')}? <Link href="/login">{t('login')}</Link></p>
          </div>

          <div className="deco_item shape_3 wow fadeInRight" data-wow-delay=".1s">
            <Image src={shape_1} alt="Paradox - Shape Image" />
          </div>
          <div className="deco_item shape_4 wow zoomIn" data-wow-delay=".1s">
            <Image src={shape_circle_2} alt="Paradox - Shape Image" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignupMainArea;