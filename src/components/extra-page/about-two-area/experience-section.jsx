import React from 'react';
import about_image_2 from '@assets/images/about/about_image_2.jpg'
import Link from 'next/link';
import Image from 'next/image';

const ExperienceSection = () => {
  return (
    <section className="experience_section section_space_lg bg_light">
      <div className="container">
        <div className="row justify-content-lg-between">
          <div className="col col-lg-5">
            <div className="experience_content mb-4 mb-lg-0">
              <div className="section_heading mb-5">
                <h2 className="heading_title">
                  My Experience
                </h2>
                <p className="heading_description">
                  Digital Marketing refers to all marketing efforts that use digital media (or “electronic devices” and “digital channels”) to reach customers and promote brands, products, and services.
                </p>
              </div>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Earn a College Degree in Digital Marketing</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Practice by Creating Mock Campaigns</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Take an Online Digital Marketing Course</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="section_heading mb-4">
              <h3 className="heading_title mb-0">
                My Skills
              </h3>
            </div>
            <div className="progress_item">
              <h4 className="item_title">Data Analysis</h4>
              <div className="progress">
                <div className="progress_bar rx_width_84 wow animated" role="progressbar" data-wow-duration="1s" data-wow-delay=".4s" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                  <span className="value_text">84%</span>
                </div>
              </div>
            </div>
            <div className="progress_item">
              <h4 className="item_title">Content Creation</h4>
              <div className="progress">
                <div className="progress_bar rx_width_93 wow animated" role="progressbar" data-wow-duration="1s" data-wow-delay=".4s" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                  <span className="value_text">93%</span>
                </div>
              </div>
            </div>
            <div className="progress_item">
              <h4 className="item_title">SEO & SEM</h4>
              <div className="progress">
                <div className="progress_bar rx_width_93 wow animated" role="progressbar" data-wow-duration="1s" data-wow-delay=".4s" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                  <span className="value_text">93%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;