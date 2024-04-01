import Link from 'next/link';
import React from 'react';

const ContactSection = () => {
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
                  <span>Contact Us</span>
                </h2>
                <h3 className="heading_title mb-0">
                  Get In Touch
                </h3>
              </div>
              <ul className="contact_info_list style_2 unordered_list_block">
                <li>
                  <strong>Loaction:</strong>
                  <span>1989 Timber Ridge Road Sacramento CA, California</span>
                </li>
                <li>
                  <strong>Phone:</strong>
                  <span><Link href="tel:+1-202-555-0149">+1-202-555-0149</Link></span>
                </li>
                <li>
                  <strong>Email:</strong>
                  <span><Link href="mailto:contact@paradox.com">contact@paradox.com</Link></span>
                </li>
                <li>
                  <strong>Opening:</strong>
                  <span>10am - 6pm, Friday Close</span>
                </li>
                <li>
                  <strong>Follow Us:</strong>
                  <ul className="social_icon unordered_list">
                  <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
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