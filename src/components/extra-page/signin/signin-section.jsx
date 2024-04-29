import React, { useState } from 'react';
import shape_1 from '@assets/images/shapes/shape_1.svg'
import shape_circle_2 from '@assets/images/shapes/shape_circle_2.svg'
import Image from 'next/image';
import { Spinner } from '@chakra-ui/react'
import { useHttpClient } from '@hooks/use-http-request';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useToast } from '@chakra-ui/react'

const SigninSection = () => {
  const router = useRouter();
  const { loading, sendRequest } = useHttpClient();
  const toast = useToast()

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
          title: `Welcome back`,
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
          <h2 className="form_title">Welcome Back!</h2>
          <p>Enter the information below to signin your account</p>
          <form onSubmit={(event) => loginHandler(event)}
            action="#">
            <div className="form-group">
              <label htmlFor="input_email" className="form-label">Email Address<sup className="form_required_indicator">*</sup></label>
              <input onChange={(event) => changeFormInputHandler(event)}
                id="email" className="form-control" type="email" name="email" placeholder="Your Address" required />
            </div>
            <div className="form-group">
              <label htmlFor="input_pass" className="form-label">Enter Password<sup className="form_required_indicator">*</sup></label>
              <input onChange={(event) => changeFormInputHandler(event)}
                id="password" className="form-control" type="password" name="password" placeholder="Enter Password" required />
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <Link className="link_forgot_pass" href="#!">Forgot Password?</Link>
            </div>
            <button disabled={loading} type="submit" className="bd-btn-link">
              {loading ? <Spinner /> : <span className="bd-button-content-wrapper">
                <span className="bd-button-icon">
                  <i className="fa-light fa-arrow-right-long"></i>
                </span>
                <span className="pd-animation-flip">
                  <span className="bd-btn-anim-wrapp">
                    <span className="bd-button-text">Sign In</span>
                    <span className="bd-button-text">Sign In</span>
                  </span>
                </span>
              </span>}
            </button>

          </form>
          <p className="mb-0">Don’t have an Account? <Link href="/signup">Sign Up</Link></p>
        </div>

        <div className="deco_item shape_3 wow fadeInRight" data-wow-delay=".1s">
          <Image src={shape_1} alt="Paradox - Shape Image" />
        </div>
        <div className="deco_item shape_4 wow zoomIn" data-wow-delay=".1s">
          <Image src={shape_circle_2} alt="Paradox - Shape Image" />
        </div>
      </div>
    </section>
  );
};

export default SigninSection;