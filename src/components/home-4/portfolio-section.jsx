import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import portfolio_data from '@data/common_data/portfolio-data';

const PortfolioSectionFour = () => {
  return (
    <section className="portfolio_section section_space_lg">
      <div className="container">
        <div className="section_heading is_portfolio">
          <div className="row align-items-end">
            <div className="col col-lg-6">
              <h2 className="heading_subtitle">
                <span className="double_icon">
                  <i className="fas fa-sharp fa-square-full"></i>
                  <i className="fas fa-sharp fa-square-full"></i>
                </span>
                <span>Our Work</span>
              </h2>
              <h3 className="heading_title mb-0">
                Our Latest Work
              </h3>
            </div>
            <div className="col col-lg-6">
              <div className="button-group filters-button-group m-0 justify-content-start justify-content-lg-end">
                <div className="portfolio_button has_bg_transparent">
                  <nav>
                    <div className="nav" id="nav-tab" role="tablist">
                      <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">View All</button>
                      <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Graphics</button>
                      <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">UI/UX</button>
                      <button className="nav-link" id="nav-wordpress-tab" data-bs-toggle="tab" data-bs-target="#nav-wordpress" type="button" role="tab" aria-controls="nav-wordpress" aria-selected="false">WordPress</button>
                      <button className="nav-link" id="nav-webdesign-tab" data-bs-toggle="tab" data-bs-target="#nav-webdesign" type="button" role="tab" aria-controls="nav-webdesign" aria-selected="false">Web Design</button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
            <div className="grid row">
              {
                portfolio_data.slice(14,18).map((item) => (
                  <div className="col col-lg-6 col-md-6 element-item graphics " data-category="graphics" key={item.id}>
                    <div className="portfolio_item layout_grid text-center">
                      <div className="item_image">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <Image src={item.image} style={{ width: "100%", height: "100%" }} alt="Paradox Portfolio Image" />
                        </Link>
                      </div>
                      <div className="item_content">
                        <ul className="category_list unordered_list_center">
                          <li><Link href="/portfolio-masonry">{item.category_list}</Link></li>
                        </ul>
                        <h3 className="item_title mb-0">
                          <Link href={`/portfolio-details/${item.id}`}>
                            {item.item_title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
            <div className="grid row">
              {
                portfolio_data.slice(14,18).map((item) => (
                  item.graphics && <div className="col col-lg-6 col-md-6 element-item graphics " data-category="graphics" key={item.id}>
                    <div className="portfolio_item layout_grid text-center">
                      <div className="item_image">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <Image src={item.image} style={{ width: "100%", height: "100%" }} alt="Paradox Portfolio Image" />
                        </Link>
                      </div>
                      <div className="item_content">
                        <ul className="category_list unordered_list_center">
                          <li><Link href="/portfolio-masonry">{item.category_list}</Link></li>
                        </ul>
                        <h3 className="item_title mb-0">
                          <Link href={`/portfolio-details/${item.id}`}>
                            {item.item_title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
            <div className="grid row">
              {
                portfolio_data.slice(14,18).map((item) => (
                  item.uiUx && <div className="col col-lg-6 col-md-6 element-item graphics " data-category="graphics" key={item.id}>
                    <div className="portfolio_item layout_grid text-center">
                      <div className="item_image">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <Image src={item.image} style={{ width: "100%", height: "100%" }} alt="Paradox Portfolio Image" />
                        </Link>
                      </div>
                      <div className="item_content">
                        <ul className="category_list unordered_list_center">
                          <li><Link href="/portfolio-masonry">{item.category_list}</Link></li>
                        </ul>
                        <h3 className="item_title mb-0">
                          <Link href={`/portfolio-details/${item.id}`}>
                            {item.item_title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="tab-pane fade" id="nav-wordpress" role="tabpanel" aria-labelledby="nav-wordpress-tab" tabIndex="0">
            <div className="grid row">
              {
                portfolio_data.slice(14,18).map((item) => (
                  item.wordpress && <div className="col col-lg-6 col-md-6 element-item graphics " data-category="graphics" key={item.id}>
                    <div className="portfolio_item layout_grid text-center">
                      <div className="item_image">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <Image src={item.image} style={{ width: "100%", height: "100%" }} alt="Paradox Portfolio Image" />
                        </Link>
                      </div>
                      <div className="item_content">
                        <ul className="category_list unordered_list_center">
                          <li><Link href="/portfolio-masonry">{item.category_list}</Link></li>
                        </ul>
                        <h3 className="item_title mb-0">
                          <Link href={`/portfolio-details/${item.id}`}>
                            {item.item_title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="tab-pane fade" id="nav-webdesign" role="tabpanel" aria-labelledby="nav-webdesign-tab" tabIndex="0">
            <div className="grid row">
              {
                portfolio_data.slice(14,18).map((item) => (
                  item.webDesign && <div className="col col-lg-6 col-md-6 element-item graphics " data-category="graphics" key={item.id}>
                    <div className="portfolio_item layout_grid text-center">
                      <div className="item_image">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <Image src={item.image} style={{ width: "100%", height: "100%" }} alt="Paradox Portfolio Image" />
                        </Link>
                      </div>
                      <div className="item_content">
                        <ul className="category_list unordered_list_center">
                          <li><Link href="/portfolio-masonry">{item.category_list}</Link></li>
                        </ul>
                        <h3 className="item_title mb-0">
                          <Link href={`/portfolio-details/${item.id}`}>
                            {item.item_title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="btn_wrap pt-4 pb-0 text-center">
          <Link href="/portfolio" className="bd-btn-link btn_primary">
            <span className="bd-button-content-wrapper">
              <span className="bd-button-icon">
                <i className="fa-light fa-arrow-right-long"></i>
              </span>
              <span className="pd-animation-flip">
                <span className="bd-btn-anim-wrapp">
                  <span className="bd-button-text">View All Work</span>
                  <span className="bd-button-text">View All Work</span>
                </span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSectionFour;