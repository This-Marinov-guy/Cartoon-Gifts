import React from 'react';
import image_1 from '@assets/images/team/team_admin_image_1.png'
import image_2 from '@assets/images/team/team_admin_image_2.png'
import image_3 from '@assets/images/team/team_admin_image_3.png'
import image_4 from '@assets/images/team/team_admin_image_4.png'
import image_5 from '@assets/images/team/team_admin_image_5.png'
import image_6 from '@assets/images/team/team_admin_image_6.png'
import image_7 from '@assets/images/team/team_admin_image_7.png'
import image_8 from '@assets/images/team/team_admin_image_8.png'
import Link from 'next/link';
import Image from 'next/image';
import Pagination_Data from '@components/common/pagination';

const TeamSection = () => {
  const team_data = [
    {
      id: 1,
      admin_name: 'Gary M. Martin',
      designation: 'Sr. Product Manager',
      image: image_1
    },
    {
      id: 2,
      admin_name: 'Karen L. Head',
      designation: 'Sr. Digital Marketer',
      image: image_2
    },
    {
      id: 3,
      admin_name: 'Daniel S. Anson',
      designation: 'Sr. UI/UX Designer',
      image: image_3
    },
    {
      id: 4,
      admin_name: 'William P. Robinson',
      designation: 'Sr. Developer',
      image: image_4
    },
    {
      id: 5,
      admin_name: 'Gary M. Martin',
      designation: 'Sr. Product Manager',
      image: image_5
    },
    {
      id: 6,
      admin_name: 'Karen L. Head',
      designation: 'Sr. Digital Marketer',
      image: image_6
    },
    {
      id: 7,
      admin_name: 'Daniel S. Anson',
      designation: 'Sr. UI/UX Designer',
      image: image_7
    },
    {
      id: 8,
      admin_name: 'William P. Robinson',
      designation: 'Sr. Develope',
      image: image_8
    },
  ]
  return (
    <section className="team_section section_space_lg">
      <div className="container">
        <div className="row justify-content-center">

          {
            team_data.slice(0, 8).map((item) => (
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
        <Pagination_Data />
      </div>
    </section>
  );
};

export default TeamSection;