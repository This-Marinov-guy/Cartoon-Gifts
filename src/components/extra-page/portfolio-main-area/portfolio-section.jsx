import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Pagination_Data from '@components/common/pagination';
import portfolio_data from '@data/common_data/portfolio-data';
import useTranslation from 'next-translate/useTranslation';

const PortfolioSection = () => {
    const { t } = useTranslation('components');
  return (
    <section className="portfolio_section section_space_lg">
      <div className="container">
        <div className="button-group filters-button-group">
          <h3>{t('extra-page.portfolio-main-area.ourWorks')}</h3>
        </div>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
            <div className="row grid">
              {
                portfolio_data.map((item) => (
                  <div className="col col-xl-4 col-lg-4 col-md-6 element-item graphics" key={item.id}>
                    <div className="portfolio_item layout_grid text-center">
                      <div className="item_image">
                        <Image src={item.image} style={{height: '300px', objectFit: 'contain'}} alt="Paradox Portfolio Image" />
                      </div>
                      <div className="item_content">
                        <ul className="category_list unordered_list_center">
                          <li>{item.title}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          {/* <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
            <div className="row grid">
              {portfolio_data.slice(5, 14).map((item) => (
                item.graphics && <div className="col col-xl-4 col-lg-4 col-md-6 element-item graphics" key={item.id}>
                  <div className="portfolio_item layout_grid text-center">
                    <div className="item_image">
                      <Image src={item.image} style={{ width: "100%", height: "100%" }} alt="Paradox Portfolio Image" />
                    </div>
                    <div className="item_image">
                      <Image src={item.image} style={{ width: "100%", height: "100%" }} alt="Paradox Portfolio Image" />
                    </div>
                    <div className="item_content">
                      <ul className="category_list unordered_list_center">
                        <li>{item.title}</li>
                      </ul>
                    </div>  
                  </div>
                </div>
              ))
              }
            </div>
          </div>
          <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
            <div className="row grid">
              {portfolio_data.slice(5, 14).map((item) => (
                item.uiUx && <div className="col col-xl-4 col-lg-4 col-md-6 element-item graphics" key={item.id}>
                  <div className="portfolio_item layout_grid text-center">
                    <div className="item_image">
                      <Link href={`/portfolio-details/${item.id}`}>
                        <Image src={item.image} style={{ width: "100%", height: "100%" }} alt="Paradox Portfolio Image" />
                      </Link>
                    </div>
                    <div className="item_content">
                      <ul className="category_list unordered_list_center">
                        <li><Link href="/portfolio">{item.catagory_list}</Link></li>
                      </ul>
                      <h3 className="item_title mb-0">
                        <Link href={`/portfolio-details/${item.id}`}>
                          {item.description}
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
            <div className="row grid">
              {portfolio_data.slice(5, 14).map((item) => (
                item.wordpress && <div className="col col-xl-4 col-lg-4 col-md-6 element-item graphics" key={item.id}>
                  <div className="portfolio_item layout_grid text-center">
                    <div className="item_image">
                      <Link href={`/portfolio-details/${item.id}`}>
                        <Image src={item.image} style={{ width: "100%", height: "100%" }} alt="Paradox Portfolio Image" />
                      </Link>
                    </div>
                    <div className="item_content">
                      <ul className="category_list unordered_list_center">
                        <li><Link href="/portfolio">{item.catagory_list}</Link></li>
                      </ul>
                      <h3 className="item_title mb-0">
                        <Link href={`/portfolio-details/${item.id}`}>
                          {item.description}
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
            <div className="row grid">
              {portfolio_data.slice(5, 14).map((item) => (
                item.webDesign && <div className="col col-xl-4 col-lg-4 col-md-6 element-item graphics" key={item.id}>
                  <div className="portfolio_item layout_grid text-center">
                    <div className="item_image">
                      <Link href={`/portfolio-details/${item.id}`}>
                        <Image src={item.image} style={{ width: "100%", height: "100%" }} alt="Paradox Portfolio Image" />
                      </Link>
                    </div>
                    <div className="item_content">
                      <ul className="category_list unordered_list_center">
                        <li><Link href="/portfolio">{item.catagory_list}</Link></li>
                      </ul>
                      <h3 className="item_title mb-0">
                        <Link href={`/portfolio-details/${item.id}`}>
                          {item.description}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))
              }
            </div>
          </div> */}
        </div>
      </div>
      {/* <Pagination_Data currentPage={1} totalPages={5}/> */}
    </section>
  );
};

export default PortfolioSection;