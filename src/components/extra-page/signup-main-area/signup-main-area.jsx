import React from 'react';
import banner_image from '@assets/images/banner/register_banner_image_1.png'
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

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,
      "Please create a stronger password with capital and small letters, number and a special symbol"
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Passwords do not match"),
  // check: yup.bool().required().oneOf([true], "Terms must be accepted")
});

const SignupMainArea = () => {
  const router = useRouter();
  const toast = useToast();
  const { loading, sendRequest } = useHttpClient();

  return (
    <main>
      <section className="register_section">
        <div className="column decoration_wrap">
          <Image src={banner_image} alt="Paradox Iillustration Image" />
          <div className="deco_item shape_1 wow fadeInDown" data-wow-delay=".1s">
            <Image src={shape_circle_dashed_2} alt="Paradox - Shape Image" />
          </div>
          <div className="deco_item shape_2 wow fadeInUp" data-wow-delay=".1s">
            <Image src={shape_circle_half_1} style={{ width: "100%", height: "100%" }} alt="Paradox - Shape Image" />
          </div>
        </div>
        <div className="column decoration_wrap">
          <div className="register_form_wrap ms-lg-0">
            <h2 className="form_title">Create an account</h2>
            <p>Enter the information below to create your account</p>
            <Formik
              className="inner"
              validationSchema={schema}
              onSubmit={async (values) => {
                try {
                  const response = await sendRequest('/api/user/sign-up', "POST", values)

                  if (response.status) {
                    router.push('/login');
                    toast({
                      title: 'Profile created successfully',
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
                    <label htmlFor="input_name" className="form-label">Your Name<sup className="form_required_indicator">*</sup></label>
                    <Field name='name' className="form-control" type="text" placeholder="Your Name" />
                    <ErrorMessage className="error" name="name" component="div" />
                  </div>
                  <div className="col col-md-6 form-group">
                    <label htmlFor="input_email" className="form-label">Email Address<sup className="form_required_indicator">*</sup></label>
                    <Field name='email' className="form-control" type="email" placeholder="Your Address" />
                    <ErrorMessage className="error" name="email" component="div" />
                  </div>
                  <div className="col col-md-6 form-group">
                    <label htmlFor="input_pass" className="form-label">Enter Password<sup className="form_required_indicator">*</sup></label>
                    <Field name='password' className="form-control" type="text" placeholder="Enter Password" />
                    <ErrorMessage className="error" name="password" component="div" />
                  </div>
                  <div className="col col-md-6 form-group">
                    <label htmlFor="input_pass" className="form-label">Enter Password<sup className="form_required_indicator">*</sup></label>
                    <Field name='confirmPassword' className="form-control" type="text" placeholder="Confirm Password" />
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
                          <span className="bd-button-text">Submit Now</span>
                          <span className="bd-button-text">Submit Now</span>
                        </span>
                      </span>
                    </span>}
                  </button>
                </Form>
              )}
            </Formik>

            <p className="mb-0">Already have an account? <Link href="/login">Sign In</Link></p>
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