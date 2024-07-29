import React from 'react';
import review_data from '@data/common_data/review-data';
import Image from 'next/image';
import Pagination_Data from '@components/common/pagination';

const TestimonialSection = () => {

  return (
    <section className="review_section section_space_lg">
      <div className="container">
        <div className="review_items_group row justify-content-center">
          {
            review_data.slice(0, 6).map((item) => (
              <div className="col col-lg-4 col-md-6" key={item.id}>
                <div className="review_item style_1">
                  <div className="content_area">
                    <p className="review_content">
                      {item.review_content}
                    </p>
                    <ul className="rating_star unordered_list">
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                      <li><i className="fas fa-star"></i></li>
                    </ul>
                    <span className="quote_icon">
                      <Image src={item.quote_icon} style={{ width: "100%", height: "100%" }} alt="Paradox Icon Quote" />
                    </span>
                  </div>
                  <div className="admin_item">
                    <div className="admin_thumbnail">
                      <Image src={item.thumbnail} style={{ width: "100%", height: "100%" }} alt="Admin Avatar" />
                    </div>
                    <div className="admin_info">
                      <h3 className="admin_name">{item.admin_name}</h3>
                      <span className="admin_designation">{item.designation}</span>
                    </div>
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

export default TestimonialSection;