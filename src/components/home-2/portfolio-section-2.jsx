import Link from 'next/link';
import React from 'react';


const PortfolioSectionTwo = () => {
    return (
        <section className="portfolio_section section_space_lg">
            <div className="decoration_wrap">
                <div className="container">
                    <div className="section_heading style_2 text-center">
                        <h2 className="heading_subtitle">
                            <span>My Portfolio</span>
                        </h2>
                        <h3 className="heading_title mb-0">
                            My Best Works
                        </h3>
                    </div>
                    <div className="button-group filters-button-group style_2">
                        <div className="portfolio_button">
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
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                            <div className="grid row">
                                <div className="col col-lg-8 element-item webdesign" data-category="webdesign">
                                    <div className="portfolio_item layout_split">
                                        <div className="item_image">
                                            <Link href="/portfolio-details">
                                                <img src="assets/images/portfolio/portfolio_item_details_image_4.jpg" alt="Paradox Portfolio Image"/>
                                            </Link>
                                        </div>
                                        <div className="item_content">
                                            <ul className="category_list unordered_list">
                                                <li>
                                                    <Link href="/portfolio">Life Style</Link>
                                                </li>
                                            </ul>
                                            <h3 className="item_title">
                                                <Link href="/portfolio-details">
                                                    3D Model for Travel App
                                                </Link>
                                            </h3>
                                            <p className="item_description">
                                                We help to generte positive cash flow & use the proceeds in further
                                            </p>
                                            <Link className="btn-link" href="/portfolio-details">
                                                <span className="btn_text">View Details</span>
                                                <span className="btn_icon">
                                                    <img src="assets/images/icons/icon_arrow_down_right_dark.svg" alt="Paradox icons"/>
                                                    <img src="assets/images/icons/icon_arrow_down_right_danger.svg" alt="Paradox icons"/>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-4 element-item wordpress" data-category="wordpress">
                                    <div className="portfolio_item layout_boxed">
                                        <div className="item_content">
                                            <ul className="category_list unordered_list">
                                                <li>
                                                    <Link href="/portfolio-grid">Meetup</Link>
                                                </li>
                                            </ul>
                                            <h3 className="item_title">
                                                <Link href="/portfolio-details">
                                                    Online Meetup App
                                                </Link>
                                            </h3>
                                            <p className="item_description">
                                                We help to generte positive cash flow & use the proceeds in further
                                            </p>
                                            <Link className="btn-link" href="/portfolio-details">
                                                <span className="btn_text">View Details</span>
                                                <span className="btn_icon">
                                                    <img src="assets/images/icons/icon_arrow_down_right_dark.svg" alt="Paradox icons"/>
                                                    <img src="assets/images/icons/icon_arrow_down_right_danger.svg" alt="Paradox icons"/>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="item_image">
                                            <Link href="/portfolio-details">
                                                <img src="assets/images/portfolio/portfolio_item_details_image_6.jpg" alt="Paradox Portfolio Image"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-4 element-item uiux" data-category="uiux">
                                    <div className="portfolio_item layout_boxed">
                                        <div className="item_content">
                                            <ul className="category_list unordered_list">
                                                <li>
                                                    <Link href="/portfolio-details">Education</Link>
                                                </li>
                                            </ul>
                                            <h3 className="item_title">
                                                <Link href="/portfolio-details">
                                                    Education Website
                                                </Link>
                                            </h3>
                                            <p className="item_description">
                                                We help to generte positive cash flow & use the proceeds in further
                                            </p>
                                            <Link className="btn-link" href="/portfolio-details">
                                                <span className="btn_text">View Details</span>
                                                <span className="btn_icon">
                                                    <img src="assets/images/icons/icon_arrow_down_right_dark.svg" alt="Paradox icons"/>
                                                    <img src="assets/images/icons/icon_arrow_down_right_danger.svg" alt="Paradox icons"/>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="item_image">
                                            <Link href="/portfolio-details">
                                                <img src="assets/images/portfolio/portfolio_item_details_image_7.jpg" alt="Paradox Portfolio Image"/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-8 element-item graphics" data-category="graphics">
                                    <div className="portfolio_item layout_split">
                                        <div className="item_image">
                                            <Link href="/portfolio-details">
                                                <img src="assets/images/portfolio/portfolio_item_details_image_5.jpg" alt="Paradox Portfolio Image"/>
                                            </Link>
                                        </div>
                                        <div className="item_content">
                                            <ul className="category_list unordered_list">
                                                <li>
                                                    <Link href="/">Travel Agency</Link>
                                                </li>
                                            </ul>
                                            <h3 className="item_title">
                                                <Link href="/portfolio-details">
                                                    Online Reading Book App
                                                </Link>
                                            </h3>
                                            <p className="item_description">
                                                We help to generte positive cash flow & use the proceeds in further
                                            </p>
                                            <Link className="btn-link" href="/portfolio-details">
                                                <span className="btn_text">View Details</span>
                                                <span className="btn_icon">
                                                    <img src="assets/images/icons/icon_arrow_down_right_dark.svg" alt="Paradox icons"/>
                                                    <img src="assets/images/icons/icon_arrow_down_right_danger.svg" alt="Paradox icons"/>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                          <div className='row'>
                            <div className="col col-lg-8 element-item webdesign" data-category="webdesign">
                                <div className="portfolio_item layout_split">
                                    <div className="item_image">
                                        <Link href="/portfolio-details">
                                            <img src="assets/images/portfolio/portfolio_item_details_image_4.jpg" alt="Paradox Portfolio Image"/>
                                        </Link>
                                    </div>
                                    <div className="item_content">
                                        <ul className="category_list unordered_list">
                                            <li>
                                                <Link href="/portfolio-details">Life Style</Link>
                                            </li>
                                        </ul>
                                        <h3 className="item_title">
                                            <Link href="/portfolio-details">
                                                3D Model for Travel App
                                            </Link>
                                        </h3>
                                        <p className="item_description">
                                            We help to generte positive cash flow & use the proceeds in further
                                        </p>
                                        <Link className="btn-link" href="/portfolio-details">
                                            <span className="btn_text">View Details</span>
                                            <span className="btn_icon">
                                                <img src="assets/images/icons/icon_arrow_down_right_dark.svg" alt="Paradox icons"/>
                                                <img src="assets/images/icons/icon_arrow_down_right_danger.svg" alt="Paradox icons"/>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                          <div className='row'>
                            <div className="col col-lg-4 element-item wordpress" data-category="wordpress">
                                <div className="portfolio_item layout_boxed">
                                    <div className="item_content">
                                        <ul className="category_list unordered_list">
                                            <li>
                                                <Link href="/">Meetup</Link>
                                            </li>
                                        </ul>
                                        <h3 className="item_title">
                                            <Link href="/portfolio-details">
                                                Online Meetup App
                                            </Link>
                                        </h3>
                                        <p className="item_description">
                                            We help to generte positive cash flow & use the proceeds in further
                                        </p>
                                        <Link className="btn-link" href="/portfolio-details">
                                            <span className="btn_text">View Details</span>
                                            <span className="btn_icon">
                                                <img src="assets/images/icons/icon_arrow_down_right_dark.svg" alt="Paradox icons"/>
                                                <img src="assets/images/icons/icon_arrow_down_right_danger.svg" alt="Paradox icons"/>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="item_image">
                                        <Link href="/portfolio-details">
                                            <img src="assets/images/portfolio/portfolio_item_details_image_6.jpg" alt="Paradox Portfolio Image"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="nav-wordpress" role="tabpanel" aria-labelledby="nav-wordpress-tab" tabIndex="0">
                          <div className='row'>
                            <div className="col col-lg-4 element-item uiux" data-category="uiux">
                                <div className="portfolio_item layout_boxed">
                                    <div className="item_content">
                                        <ul className="category_list unordered_list">
                                            <li>
                                                <Link href="/service">Education</Link>
                                            </li>
                                        </ul>
                                        <h3 className="item_title">
                                            <Link href="/portfolio-details">
                                                Education Website
                                            </Link>
                                        </h3>
                                        <p className="item_description">
                                            We help to generte positive cash flow & use the proceeds in further
                                        </p>
                                        <Link className="btn-link" href="/portfolio-details">
                                            <span className="btn_text">View Details</span>
                                            <span className="btn_icon">
                                                <img src="assets/images/icons/icon_arrow_down_right_dark.svg" alt="Paradox icons"/>
                                                <img src="assets/images/icons/icon_arrow_down_right_danger.svg" alt="Paradox icons"/>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="item_image">
                                        <Link href="/portfolio-details">
                                            <img src="assets/images/portfolio/portfolio_item_details_image_7.jpg" alt="Paradox Portfolio Image"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="nav-webdesign" role="tabpanel" aria-labelledby="nav-webdesign-tab" tabIndex="0">
                          <div className='row'>
                            <div className="col col-lg-8 element-item graphics" data-category="graphics">
                                <div className="portfolio_item layout_split">
                                    <div className="item_image">
                                        <Link href="/portfolio-details">
                                            <img src="assets/images/portfolio/portfolio_item_details_image_5.jpg" alt="Paradox Portfolio Image"/>
                                        </Link>
                                    </div>
                                    <div className="item_content">
                                        <ul className="category_list unordered_list">
                                            <li>
                                                <Link href="/home-5">Travel Agency</Link>
                                            </li>
                                        </ul>
                                        <h3 className="item_title">
                                            <Link href="/portfolio-details">
                                                Online Reading Book App
                                            </Link>
                                        </h3>
                                        <p className="item_description">
                                            We help to generte positive cash flow & use the proceeds in further
                                        </p>
                                        <Link className="btn-link" href="/portfolio-details">
                                            <span className="btn_text">View Details</span>
                                            <span className="btn_icon">
                                                <img src="assets/images/icons/icon_arrow_down_right_dark.svg" alt="Paradox icons"/>
                                                <img src="assets/images/icons/icon_arrow_down_right_danger.svg" alt="Paradox icons"/>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="deco_item shape_1" data-parallax='{"y" : 200, "smoothness": 20}'>
                    <img src="assets/images/shapes/shape_box_1.png" alt="Paradox Illustration"/>
                </div>
                <div className="deco_item shape_2" data-parallax='{"y" : -200, "smoothness": 20}'>
                    <img src="assets/images/shapes/shape_box_2.png" alt="Paradox Illustration"/>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSectionTwo;
