import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import team_data from '@data/common_data/team-data';

const TeamSection = () => {
  return (
    <section className="team_section section_space_lg bg_half_top_light">
      <div className="container">
        <div className="section_heading text-center">
          <h2 className="heading_subtitle text-uppercase">
            <span className="double_icon">
              <i className="fas fa-sharp fa-square-full"></i>
              <i className="fas fa-sharp fa-square-full"></i>
            </span>
            <span>Our Team</span>
          </h2>
          <h3 className="heading_title mb-0">
            Our Team Members
          </h3>
        </div>
        <div className="row justify-content-center">
          {
            team_data.slice(0, 4).map((item) => (
              <div className="col col-xl-3 col-lg-6 col-md-6" key={item.id}>
                <div className="team_item style_1 tilt">
                  <div className="admin_thumbnail">
                    <div className="thumbnail_wrap">
                      <Image src={item.image} style={{ width: "100%", height: "100%" }} alt="Paradox Team Admin Image" />
                    </div>
                  </div>
                  <div className="admin_info_content">
                    <h3 className="admin_name">{item.admin_name}</h3>
                    <p className="admin_designation mb-0">{item.designation}</p>
                    <ul className="admin_social unordered_list">
                    <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="btn_wrap pb-0 text-center">
          <Link href="/team" className="bd-btn-link btn_primary">
            <span className="bd-button-content-wrapper">
              <span className="bd-button-icon">
                <i className="fa-light fa-arrow-right-long"></i>
              </span>
              <span className="pd-animation-flip">
                <span className="bd-btn-anim-wrapp">
                  <span className="bd-button-text">Join with Us</span>
                  <span className="bd-button-text">Join with Us</span>
                </span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;