import Link from 'next/link';
import React from 'react';

import about_image from '@assets/images/about/about_image_2.jpg'
import Image from 'next/image';

const AboutMeSection = () => {
  return (
    <section className="aboutme_section section_space_lg">
      <div className="container">
        <div className="my_information_wrap">
          <div className="my_image_wrap position-relative">
            <Image src={about_image} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration" />

            <div className="avadator_cv">
              <Link href="/about" className="bd-btn-link btn_warning">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">Get started</span>
                      <span className="bd-button-text">Get started</span>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="my_info_content">
            <h3 className="my_name">Gary M. Martin</h3>
            <span className="my_designation">Sr. Product Manager</span>
            <ul className="social_icon unordered_list">
              <li><Link href="https://www.facebook.com/cartoongiftsbulgaria1/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
              <li><Link href="https://www.instagram.com/cartoongiftsbulgaria/?hl=en" target="_blank"><i className="fab fa-youtube"></i></Link></li>
            </ul>
            <p>
              {`I'm`} a digital marketer specializing in strategy & account management for enterprise brands. I love taking exciting projects and helping companies pioneer engaging consumer-centric experiences.
            </p>
            <ul className="contact_info_list unordered_list_block">
              <li>
                <strong>Experience:</strong>
                <span>5+ years</span>
              </li>
              <li>
                <strong>Specialization:</strong>
                <span>Content Writing</span>
              </li>
              <li>
                <strong>My Awards:</strong>
                <span>MarCom Awards</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;