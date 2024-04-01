import Link from 'next/link';
import React, { useState } from 'react';
import service_details from '@assets/images/video/service_details_video_poster.jpg';
import icon_together from '@assets/images/icons/icon_together_primary.svg';
import icon_care from '@assets/images/icons/icon_care_primary.svg';
import icon_teaching from '@assets/images/icons/icon_teaching_primary.svg';
import icon_communication from '@assets/images/icons/icon_communication_primary.svg';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';


const DetailsSection = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideoModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setIsOpen(false)} />
      <section className="details_section service_details section_space_lg position-relative">
        <div className="container">
          <div className="details_content_wrap">
            <div className="row">
              <div className="col col-lg-6">
                <div className="details_sectio_content mb-4 mb-lg-0">
                  <div className="section_heading">
                    <h2 className="heading_title mb-0">
                      {item?.fullTitle}
                    </h2>
                  </div>
                  <Link href="/pricing" className="bd-btn-link btn_primary">
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
                    <span className="list_item_text">Front-end web development is responsible for the look</span>
                  </li>
                  <li>
                    <span className="list_item_icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="list_item_text">Back-end web development</span>
                  </li>
                  <li>
                    <span className="list_item_icon">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="list_item_text">Testing and debugging code requires patience</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="section_space_lg">
              <div className="video_widget">
                <Image src={service_details} style={{ width: "100%", height: "100%" }} alt="Paradox Service Video Poster" />
                <button type='button' className="video_play_icon popup_video" onClick={openVideoModal}>
                  <span className="icon_wrap" data-magnetic>
                    <i className="fas fa-play"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-4">
                <div className="details_sectio_content mb-4 mb-lg-0">
                  <div className="section_heading">
                    <h2 className="heading_title mb-0">
                      Our services
                      added Best values
                    </h2>
                  </div>
                  <Link href="/pricing" className="bd-btn-link btn_primary">
                    <span className="bd-button-content-wrapper">
                      <span className="bd-button-icon">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </span>
                      <span className="pd-animation-flip">
                        <span className="bd-btn-anim-wrapp">
                          <span className="bd-button-text">View Case Studies</span>
                          <span className="bd-button-text">View Case Studies</span>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col col-lg-8">
                <div className="row">
                  <div className="col col-md-6">
                    <div className="iconbox_item bg-white">
                      <div className="item_icon">
                        <Image src={icon_care} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Eye White" />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Client Care</h3>
                        <p className="mb-0">
                          Client care always goes to the top of the list. It goes beyond just taking care of clients & making sure they are happy with your services. It is a genuine caring.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="iconbox_item bg-white">
                      <div className="item_icon">
                        <Image src={icon_together} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Eye White" />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Using Empathy</h3>
                        <p className="mb-0">
                          This follows up with client care. By having empathy and being able to put yourself in your client’s shoes, you will be able to take client care to the next level.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="iconbox_item bg-white">
                      <div className="item_icon">
                        <Image src={icon_communication} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Eye White" />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Communication Skills</h3>
                        <p className="mb-0">
                          This may sound obvious, but actually, there’s much more to learning how to communicate with a client. First, you must be able to speak openly
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="iconbox_item bg-white">
                      <div className="item_icon">
                        <Image src={icon_teaching} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Eye White" />
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">Teaching & Mentoring</h3>
                        <p className="mb-0">
                          The last on the list but one of the most important things you can do – giving back. By taking time to teach newbie devs and even mentoring a couple
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsSection;