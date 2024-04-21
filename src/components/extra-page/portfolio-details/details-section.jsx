import React from 'react';
import details_image from '@assets/images/portfolio/portfolio_item_details_image.jpg'
import icon_care_primary from '@assets/images/icons/icon_care_primary.svg'
import icon_together_primary from '@assets/images/icons/icon_together_primary.svg'
import icon_communication_primary from '@assets/images/icons/icon_communication_primary.svg'
import details_image_2 from '@assets/images/portfolio/portfolio_item_details_image_2.jpg'
import details_image_3 from '@assets/images/portfolio/portfolio_item_details_image_3.jpg'
import icon_arrow_down from '@assets/images/icons/icon_arrow_down_left_dark.svg'
import icon_arrow_left_primary from '@assets/images/icons/icon_arrow_left_primary.svg'
import icon_arrow_down_right from '@assets/images/icons/icon_arrow_down_right_dark.svg'
import icon_arrow_right_primary from '@assets/images/icons/icon_arrow_right_primary.svg'
import Link from 'next/link';
import Image from 'next/image';

const DetailsSection = ({item}) => {
  return (
    <section className="details_section portfolio_details section_space_lg">
      <div className="container">
        <div className="section_space_md pt-0">
          <div className="details_item_image">
            <Image src={details_image} style={{ width: "100%", height: "100%" }} alt="Paradox Portfolio Image" />
          </div>
        </div>
        <div className="details_content_wrap">
          <div className="row align-items-center">
            <div className="col col-lg-6">
              <div className="section_heading mb-0 mb-lg-5">
                <h2 className="heading_title mb-0">
                  {item.title}
                </h2>
              </div>
            </div>
            <div className="col col-lg-6">
              <p>
                Hence, the mobile app development process requires creating software that can be installed on the device, and enabling backend services for data access through APIs, and testing the application on target devices. Java, Python, C++, Kotlin, and Rust are popular app development languages
              </p>
            </div>
          </div>
          <div className="details_info_box">
            <div className="row">
              <div className="col col-lg-3 col-md-6 col-md-6 col-sm-6">
                <span>Date</span>
                <strong>02 March, 2023</strong>
              </div>
              <div className="col col-lg-3 col-md-6 col-md-6 col-sm-6">
                <span>Category</span>
                <strong>App Development</strong>
              </div>
              <div className="col col-lg-3 col-md-6 col-md-6 col-sm-6">
                <span>Estimation</span>
                <strong>10 Months</strong>
              </div>
              <div className="col col-lg-3 col-md-6 col-md-6 col-sm-6">
                <span>Client</span>
                <strong>Acorn Crafts LTD</strong>
              </div>
            </div>
          </div>
          <h3 className="details_item_info_title mb-3">
            Our Planing
          </h3>
          <p>
            When enterprises began building mobile apps, one concern was the proliferation of client-side technology. Enterprises had become accustomed to standardizing on a platform, such as Java™ EE. By standardizing on a platform, a business could contain a skill set around a standard architecture. Mobile devices have their own application SDKs, resulting in a proliferation of client-side choices.
          </p>
          <div className="row mb-5">
            <div className="col col-lg-4 col-md-6">
              <div className="iconbox_item bg-white">
                <div className="item_icon">
                  <Image src={icon_care_primary} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Eye White" />
                </div>
                <div className="item_content">
                  <h3 className="item_title">Client Care</h3>
                  <p className="mb-0">
                    Client care always goes to the top of the list. It goes beyond just taking care of clients & making sure they are happy with your services. It is a genuine caring.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6">
              <div className="iconbox_item bg-white">
                <div className="item_icon">
                  <Image src={icon_together_primary} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Eye White" />
                </div>
                <div className="item_content">
                  <h3 className="item_title">Using Empathy</h3>
                  <p className="mb-0">
                    This follows up with client care. By having empathy and being able to put yourself in your client’s shoes, you will be able to take client care to the next level.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6">
              <div className="iconbox_item bg-white">
                <div className="item_icon">
                  <Image src={icon_communication_primary} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Eye White" />
                </div>
                <div className="item_content">
                  <h3 className="item_title">Communication Skills</h3>
                  <p className="mb-0">
                    This may sound obvious, but actually, there’s much more to learning how to communicate with a client. First, you must be able to speak openly
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-lg-between mb-5">
            <div className="col col-lg-4">
              <div className="details_sectio_content mb-4 mb-lg-0">
                <div className="section_heading">
                  <h2 className="heading_title">
                    What we did for this project
                  </h2>
                </div>
                <Link href="/pricing" className="bd-btn-link btn-primary">
                  <span className="bd-button-content-wrapper">
                    <span className="bd-button-icon">
                      <i className="fa-light fa-arrow-right-long"></i>
                    </span>
                    <span className="pd-animation-flip">
                      <span className="bd-btn-anim-wrapp">
                        <span className="bd-button-text">Get This Service Now</span>
                        <span className="bd-button-text">Get This Service Now</span>
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col col-lg-6">
              <p>
                A website development process is a documented, predictable set of steps to take to successfully complete a website development project or web application. This process helps to align development resources, stakeholders, and team members to ensure all aspects of the project are addressed and delivered on time
              </p>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Designing the product architecture</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Testers test the software against the requirements</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Whole the system is in maintenance mode</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col col-md-6">
              <div className="details_item_image m-0">
                <Image src={details_image_2} style={{ width: "100%", height: "100%" }} alt="Paradox Portfolio Image" />
              </div>
            </div>
            <div className="col col-md-6">
              <div className="details_item_image m-0">
                <Image src={details_image_3} style={{ width: "100%", height: "100%" }} alt="Paradox Portfolio Image" />
              </div>
            </div>
          </div>

          <h3 className="details_item_info_title mb-3">
            Final Result
          </h3>
          <p>
            When enterprises began building mobile apps, one concern was the proliferation of client-side technology. Enterprises had become accustomed to standardizing on a platform, such as Java™ EE. By standardizing on a platform, a business could contain a skill set around a standard architecture. Mobile devices have their own application SDKs, resulting in a proliferation of client-side choices.
          </p>

          <div className="social_wrap">
            <h3 className="social_title text-uppercase">Share:</h3>
            <ul className="social_icon unordered_list_end">
              <li><Link href="https://www.facebook.com/cartoongiftsbulgaria1/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
              <li><Link href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
              <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
            </ul>
          </div>

          <div className="pagination_wrap">
            <div className="other_post_pagination">
              <Link href="/portfolio-details" data-cursor="-exclusion -lg" data-cursor-stick="#prev_post">
                <span className="btn_text">Previous Portfolio</span>
                <span id="prev_post" className="btn_icon">
                  <Image src={icon_arrow_down} style={{ width: "100%", height: "100%" }} alt="Paradox - Icon Arrow Down Left" />
                  <Image src={icon_arrow_left_primary} style={{ width: "100%", height: "100%" }} alt="Paradox - Icon Arrow Down Left" />
                </span>
              </Link>
              <Link href="/portfolio-details" data-cursor="-exclusion -lg" data-cursor-stick="#next_post">
                <span className="btn_text">Next Portfolio</span>
                <span id="next_post" className="btn_icon">
                  <Image src={icon_arrow_down_right} style={{ width: "100%", height: "100%" }} alt="Paradox - Icon Arrow Down Right" />
                  <Image src={icon_arrow_right_primary} style={{ width: "100%", height: "100%" }} alt="Paradox - Icon Arrow Down Right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;