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
import useTranslation from "next-translate/useTranslation";

const PortfolioMasonrySection = () => {
    const { t } = useTranslation("components");
  const portfolio_data_masonary = [
    {
      id: 1,
      image: image_16,
      category: t("extra-page.portfolio-masonry-area.category.uiux"),
      title: t("extra-page.portfolio-masonry-area.categoryTitle.productDesign"),
      style: "gridd-item width_50",
    },
    {
      id: 2,
      image: image_17,
      category: t("extra-page.portfolio-masonry-area.category.web"),
      title: t("extra-page.portfolio-masonry-area.categoryTitle.webDesign"),
      style: "gridd-item",
    },
    {
      id: 3,
      image: image_18,
      category: t("extra-page.portfolio-masonry-area.category.wordpress"),
      title: t("extra-page.portfolio-masonry-area.categoryTitle.development"),
      style: "mb-30",
    },
    {
      id: 4,
      image: image_19,
      category: t("extra-page.portfolio-masonry-area.category.graphics"),
      title: t("extra-page.portfolio-masonry-area.categoryTitle.graphicsDesign"),
      style: "",
    },
    {
      id: 5,
      image: image_20,
      category: t("extra-page.portfolio-masonry-area.category.uiux"),
      title: t("extra-page.portfolio-masonry-area.categoryTitle.productDesign"),
      style: " width_50",
    },
    {
      id: 6,
      image: image_23,
      category: t("extra-page.portfolio-masonry-area.category.uiux"),
      title: t("extra-page.portfolio-masonry-area.categoryTitle.productDesign"),
      style: " width_50",
    },
    {
      id: 7,
      image: image_21,
      category: t("extra-page.portfolio-masonry-area.category.uiux"),
      title: t("extra-page.portfolio-masonry-area.categoryTitle.productDesign"),
      style: "",
    },
    {
      id: 8,
      image: image_22,
      category: t("extra-page.portfolio-masonry-area.category.uiux"),
      title: t("extra-page.portfolio-masonry-area.categoryTitle.productDesign"),
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
                        alt={t("portfolio.altText")}
                      />
                    </Link>
                  </div>
                  <div className="item_content">
                    <ul className="category_list unordered_list">
                      <li>
                        <Link href="/portfolio-details">{item.category}</Link>
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
                        alt={t("portfolio.altText")}
                      />
                    </Link>
                  </div>
                  <div className="item_content">
                    <ul className="category_list unordered_list">
                      <li>
                        <Link href="/portfolio-details">{item.category}</Link>
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
                        alt={t("portfolio.altText")}
                      />
                    </Link>
                  </div>
                  <div className="item_content">
                    <ul className="category_list unordered_list">
                      <li>
                        <Link href="/portfolio-details">{item.category}</Link>
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
                            alt={t("portfolio.altText")}
                          />
                        </Link>
                      </div>
                      <div className="item_content">
                        <ul className="category_list unordered_list">
                          <li>
                            <Link href="/portfolio-details">
                              {item.category}
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
                            alt={t("portfolio.altText")}
                          />
                        </Link>
                      </div>
                      <div className="item_content">
                        <ul className="category_list unordered_list">
                          <li>
                            <Link href="/portfolio-details">
                              {item.category}
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
                            alt={t("portfolio.altText")}
                          />
                        </Link>
                      </div>
                      <div className="item_content">
                        <ul className="category_list unordered_list">
                          <li>
                            <Link href="/portfolio-details">
                              {item.category}
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
                        alt={t("portfolio.altText")}
                      />
                    </Link>
                  </div>
                  <div className="item_content">
                    <ul className="category_list unordered_list">
                      <li>
                        <Link href="/portfolio-details">{item.category}</Link>
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
                  <span className="bd-button-text">{t('extra-page.portfolio-masonry-area.loadMore')}</span>
                  <span className="bd-button-text">{t('extra-page.portfolio-masonry-area.loadMore')}</span>
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
