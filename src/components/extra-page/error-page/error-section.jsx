import React from 'react';
import error_img from '@assets/images/bg/error.png'
import Link from 'next/link';
import Image from 'next/image';

const ErrorSection = () => {
  return (
    <section className="error_section text-center mouse_move">
      <div className="container">
        <div className="error_image decoration_wrap text-center">
          <Image src={error_img} style={{ width: "100%", height: "100%" }} alt="Paradox - Error Image" />
        </div>
        <div className="error_content">
          <h1>Page not found</h1>
          <p>
            The requested URL you are looking for doesn’t <span className="d-md-block">exist on this server.</span>
          </p>
          <Link href="/" className="bd-btn-link btn_primary">
            <span className="bd-button-content-wrapper">
              <span className="bd-button-icon">
                <i className="fa-light fa-arrow-right-long"></i>
              </span>
              <span className="pd-animation-flip">
                <span className="bd-btn-anim-wrapp">
                  <span className="bd-button-text">Go Back To Home</span>
                  <span className="bd-button-text">Go Back To Home</span>
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