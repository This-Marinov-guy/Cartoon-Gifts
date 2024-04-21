import React from 'react';
import team_data from '@data/common_data/team-data';
import Image from 'next/image';
import Link from 'next/link';

const TeamSectionSix = () => {
  return (
    <section className="team_section section_space_lg">
      <div className="container">
        <div className="section_heading style_4 text-center">
          <h2 className="heading_subtitle">
            <span>Our Team</span>
          </h2>
          <h3 className="heading_title mb-0">
            Our Team Members
          </h3>
        </div>

        <div className="row justify-content-center">
          {
            team_data.slice(0, 4).map((item) => (
              <div className="col col-lg-3 col-md-6 col-sm-6 tilt" key={item.id}>
                <div className="team_item style_2">
                  <div className="admin_thumbnail">
                    <div className="thumbnail_wrap">
                      <Image src={item.person} style={{ width: "100%", height: "100%" }} alt="Paradox Team Admin Image" />
                    </div>
                  </div>
                  <div className="admin_info_content">
                    <h3 className="admin_name">{item.admin_name}</h3>
                    <p className="admin_designation mb-0">{item.designation}</p>
                    <ul className="admin_social unordered_list">
                    <li><Link href="https://www.facebook.com/cartoongiftsbulgaria1/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
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
                  <span className="bd-button-text">View All Member</span>
                  <span className="bd-button-text">View All Member</span>
                </span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSectionSix;