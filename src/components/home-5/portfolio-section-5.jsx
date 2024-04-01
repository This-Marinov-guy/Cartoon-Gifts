import Link from 'next/link';
import React from 'react';
import icon_arrow_down from '@assets/images/icons/icon_arrow_down_right_white.svg'
import Image from 'next/image';
import portfolio_data from '@data/common_data/portfolio-data';

const PortfolioSectionFive = () => {
  return (
    <section className="portfolio_section section_space_lg bg_primary">
      <div className="container">
        <div className="section_heading style_3 text-white">
          <div className="row align-items-center align-items-lg-end">
            <div className="col col-lg-6 col-md-7">
              <h2 className="heading_subtitle">
                <span>Our Work</span>
              </h2>
              <h3 className="heading_title mb-0">
                Our Latest Work
              </h3>
            </div>
            <div className="col col-lg-6 text-md-end col-md-5">
              <Link className="btn-link text-white" href="/portfolio">
                <span className="btn_text">View All Work</span>
                <span className="btn_icon">
                  <Image src={icon_arrow_down} style={{ width: "100%", height: "100%" }} alt="Paradox - Icon Arrow Down Right" />
                  <Image src={icon_arrow_down} style={{ width: "100%", height: "100%" }} alt="Paradox - Icon Arrow Down Right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="portfolio_inline_layout">
          {portfolio_data?.slice(18, 22).map((item) => (
            <div className="portfolio_inline_item" key={item.id}>
              <div className="item_image">
                <Link href={`/portfolio-details/${item.id}`}>
                  <Image src={item.image} style={{ width: "100%", height: "100%" }} alt="Paradox Portfolio Image" />
                </Link>
              </div>
              <div className="item_content">
                <h3 className="item_title mb-md-0">
                  <Link href={`/portfolio-details/${item.id}`}>
                    {item.title}
                  </Link>
                </h3>
                <ul className="category_list unordered_list">
                  <li><Link href="/portfolio">{item?.Catagory_list}</Link></li>
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSectionFive;