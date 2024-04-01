import Link from "next/link";
import React from "react";
import image_16 from "@assets/images/portfolio/portfolio_lfi_image_16.jpg";
import image_17 from "@assets/images/portfolio/portfolio_lfi_image_17.jpg";
import image_18 from "@assets/images/portfolio/portfolio_lfi_image_18.jpg";
import image_19 from "@assets/images/portfolio/portfolio_lfi_image_19.jpg";
import image_20 from "@assets/images/portfolio/portfolio_lfi_image_20.jpg";
import image_23 from "@assets/images/portfolio/portfolio_lfi_image_23.jpg";
import image_21 from "@assets/images/portfolio/portfolio_lfi_image_21.jpg";
import image_22 from "@assets/images/portfolio/portfolio_lfi_image_22.jpg";
import Image from "next/image";

const PortfolioMasonrySection = () => {
  const portfolio_data_masonary = [
    {
      id: 1,
      image: image_16,
      cetagory: "Ui/Ux",
      title: "Product Design",
      style: "gridd-item width_50",
    },
    {
      id: 2,
      image: image_17,
      cetagory: "Web",
      title: "Web Design",
      style: "gridd-item",
    },
    {
      id: 3,
      image: image_18,
      cetagory: "Wordpress",
      title: "Development",
      style: "mb-30",
    },
    {
      id: 4,
      image: image_19,
      cetagory: "Graphics",
      title: "Graphics Design",
      style: "",
    },
    {
      id: 5,
      image: image_20,
      cetagory: "Ui/Ux",
      title: "Product Design",
      style: " width_50",
    },
    {
      id: 6,
      image: image_23,
      cetagory: "Ui/Ux",
      title: "Product Design",
      style: " width_50",
    },
    {
      id: 7,
      image: image_21,
      cetagory: "Ui/Ux",
      title: "Product Design",
      style: "",
    },
    {
      id: 8,
      image: image_22,
      cetagory: "Ui/Ux",
      title: "Product Design",
      style: "gridd-item",
    },
  ];

  return (
    <section className="portfolio_section section_space_lg">
      <div className="container">
        <div className="row port-row g-4">
          <div className="col-lg-6">
            {portfolio_data_masonary.slice(0, 1).map((item) => (
              <div className={item?.style} key={item.id}>
                <div className="portfolio_item layout_fullimage">
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
                    <ul className="category_list unordered_list">
                      <li>
                        <Link href="/portfolio-details">{item.cetagory}</Link>
                      </li>
                    </ul>
                    <h3 className="item_title mb-0">
                      <Link href={`/portfolio-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-3">
            {portfolio_data_masonary.slice(1, 2).map((item) => (
              <div className={item?.style} key={item.id}>
                <div className="portfolio_item layout_fullimage">
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
                    <ul className="category_list unordered_list">
                      <li>
                        <Link href="/portfolio-details">{item.cetagory}</Link>
                      </li>
                    </ul>
                    <h3 className="item_title mb-0">
                      <Link href={`/portfolio-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-3">
            {portfolio_data_masonary.slice(2, 4).map((item) => (
              <div className={item?.style} key={item.id}>
                <div className="portfolio_item layout_fullimage">
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
                    <ul className="category_list unordered_list">
                      <li>
                        <Link href="/portfolio-details">{item.cetagory}</Link>
                      </li>
                    </ul>
                    <h3 className="item_title mb-0">
                      <Link href={`/portfolio-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            <div className="row port-row g-4">
              <div className="col-lg-12">
                {portfolio_data_masonary.slice(4, 5).map((item) => (
                  <div className={item?.style} key={item.id}>
                    <div className="portfolio_item layout_fullimage">
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
                        <ul className="category_list unordered_list">
                          <li>
                            <Link href="/portfolio-details">
                              {item.cetagory}
                            </Link>
                          </li>
                        </ul>
                        <h3 className="item_title mb-0">
                          <Link href={`/portfolio-details/${item.id}`}>
                            {item.title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-6">
                {portfolio_data_masonary.slice(5, 6).map((item) => (
                  <div className={item?.style} key={item.id}>
                    <div className="portfolio_item layout_fullimage">
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
                        <ul className="category_list unordered_list">
                          <li>
                            <Link href="/portfolio-details">
                              {item.cetagory}
                            </Link>
                          </li>
                        </ul>
                        <h3 className="item_title mb-0">
                          <Link href={`/portfolio-details/${item.id}`}>
                            {item.title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-6">
                {portfolio_data_masonary.slice(6, 7).map((item) => (
                  <div className={item?.style} key={item.id}>
                    <div className="portfolio_item layout_fullimage">
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
                        <ul className="category_list unordered_list">
                          <li>
                            <Link href="/portfolio-details">
                              {item.cetagory}
                            </Link>
                          </li>
                        </ul>
                        <h3 className="item_title mb-0">
                          <Link href={`/portfolio-details/${item.id}`}>
                            {item.title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {portfolio_data_masonary.slice(7, 8).map((item) => (
              <div className={item?.style} key={item.id}>
                <div className="portfolio_item layout_fullimage">
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
                    <ul className="category_list unordered_list">
                      <li>
                        <Link href="/portfolio-details">{item.cetagory}</Link>
                      </li>
                    </ul>
                    <h3 className="item_title mb-0">
                      <Link href={`/portfolio-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pagination_wrap text-center">
          <button className="bd-btn-link outline-dark">
            <span className="bd-button-content-wrapper">
              <span className="bd-button-icon">
                <i className="fa-light fa-arrow-right-long"></i>
              </span>
              <span className="pd-animation-flip">
                <span className="bd-btn-anim-wrapp">
                  <span className="bd-button-text">Load More</span>
                  <span className="bd-button-text">Load More</span>
                </span>
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMasonrySection;
