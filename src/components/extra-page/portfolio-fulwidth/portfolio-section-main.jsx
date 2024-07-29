import React from "react";
import portfolio_data from "@data/common_data/portfolio-data";
import Link from "next/link";
import Image from "next/image";
import Pagination_Data from "@components/common/pagination";

const PortfolioSectionMain = () => {
  return (
    <section className="portfolio_section section_space_lg">
      <div className="container-fluid">
        <div className="button-group filters-button-group">
          <div className="portfolio_button">
            <nav>
              <div className="nav" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  View All
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Graphics
                </button>
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  UI/UX
                </button>
                <button
                  className="nav-link"
                  id="nav-wordpress-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-wordpress"
                  type="button"
                  role="tab"
                  aria-controls="nav-wordpress"
                  aria-selected="false"
                >
                  WordPress
                </button>
                <button
                  className="nav-link"
                  id="nav-webdesign-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-webdesign"
                  type="button"
                  role="tab"
                  aria-controls="nav-webdesign"
                  aria-selected="false"
                >
                  Web Design
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex="0"
          >
            <div className="grid row">
              {portfolio_data.slice(5, 14).map((item) => (
                <div
                  className="col col-lg-6 element-item graphics "
                  data-category="graphics"
                  key={item.id}
                >
                  <div className="portfolio_item layout_grid text-center">
                    <div className="item_image">
                      <Link href={`/portfolio-details/${item.id}`}>
                        <Image
                          src={item.image}
                          style={{ width: "100%", height: "100%" }}
                          alt="Paradox Portfolio Image"
                        />
                      </Link>
                    </div>
                    <div className="item_content">
                      <ul className="category_list unordered_list_center">
                        <li>
                          <Link href="/portfolio">{item.catagory_list}</Link>
                        </li>
                      </ul>
                      <h3 className="item_title mb-0">
                        <Link href={`/portfolio-details/${item.id}`}>
                          {item.description}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabIndex="0"
          >
            <div className="grid row">
              {portfolio_data.slice(5, 14).map(
                (item) =>
                  item.graphics && (
                    <div
                      className="col col-lg-6 element-item graphics "
                      data-category="graphics"
                      key={item.id}
                    >
                      <div className="portfolio_item layout_grid text-center">
                        <div className="item_image">
                          <Link href={`/portfolio-details/${item.id}`}>
                            <Image
                              src={item.image}
                              style={{ width: "100%", height: "100%" }}
                              alt="Paradox Portfolio Image"
                            />
                          </Link>
                        </div>
                        <div className="item_content">
                          <ul className="category_list unordered_list_center">
                            <li>
                              <Link href="/portfolio">
                                {item.catagory_list}
                              </Link>
                            </li>
                          </ul>
                          <h3 className="item_title mb-0">
                            <Link href={`/portfolio-details/${item.id}`}>
                              {item.description}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabIndex="0"
          >
            <div className="grid row">
              {portfolio_data.slice(5, 14).map(
                (item) =>
                  item.uiUx && (
                    <div
                      className="col col-lg-6 element-item graphics "
                      data-category="graphics"
                      key={item.id}
                    >
                      <div className="portfolio_item layout_grid text-center">
                        <div className="item_image">
                          <Link href={`/portfolio-details/${item.id}`}>
                            <Image
                              src={item.image}
                              style={{ width: "100%", height: "100%" }}
                              alt="Paradox Portfolio Image"
                            />
                          </Link>
                        </div>
                        <div className="item_content">
                          <ul className="category_list unordered_list_center">
                            <li>
                              <Link href="/portfolio">
                                {item.catagory_list}
                              </Link>
                            </li>
                          </ul>
                          <h3 className="item_title mb-0">
                            <Link href={`/portfolio-details/${item.id}`}>
                              {item.description}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-wordpress"
            role="tabpanel"
            aria-labelledby="nav-wordpress-tab"
            tabIndex="0"
          >
            <div className="grid row">
              {portfolio_data.slice(5, 14).map(
                (item) =>
                  item.wordpress && (
                    <div
                      className="col col-lg-6 element-item graphics "
                      data-category="graphics"
                      key={item.id}
                    >
                      <div className="portfolio_item layout_grid text-center">
                        <div className="item_image">
                          <Link href={`/portfolio-details/${item.id}`}>
                            <Image
                              src={item.image}
                              style={{ width: "100%", height: "100%" }}
                              alt="Paradox Portfolio Image"
                            />
                          </Link>
                        </div>
                        <div className="item_content">
                          <ul className="category_list unordered_list_center">
                            <li>
                              <Link href="/portfolio">
                                {item.catagory_list}
                              </Link>
                            </li>
                          </ul>
                          <h3 className="item_title mb-0">
                            <Link href={`/portfolio-details/${item.id}`}>
                              {item.description}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-webdesign"
            role="tabpanel"
            aria-labelledby="nav-webdesign-tab"
            tabIndex="0"
          >
            <div className="grid row">
              {portfolio_data.slice(5, 14).map(
                (item) =>
                  item.webDesign && (
                    <div
                      className="col col-lg-6 element-item graphics "
                      data-category="graphics"
                      key={item.id}
                    >
                      <div className="portfolio_item layout_grid text-center">
                        <div className="item_image">
                          <Link href={`/portfolio-details/${item.id}`}>
                            <Image
                              src={item.image}
                              style={{ width: "100%", height: "100%" }}
                              alt="Paradox Portfolio Image"
                            />
                          </Link>
                        </div>
                        <div className="item_content">
                          <ul className="category_list unordered_list_center">
                            <li>
                              <Link href="/portfolio">
                                {item.catagory_list}
                              </Link>
                            </li>
                          </ul>
                          <h3 className="item_title mb-0">
                            <Link href={`/portfolio-details/${item.id}`}>
                              {item.description}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        <Pagination_Data />
      </div>
    </section>
  );
};

export default PortfolioSectionMain;
