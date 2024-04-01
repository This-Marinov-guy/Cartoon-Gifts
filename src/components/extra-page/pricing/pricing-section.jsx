import Link from 'next/link';
import React from 'react';
import shape_dots_BG from '@assets/images/shapes/shape_dots_BG.png'

const PricingSection = () => {
  return (
    <section className="pricing_section section_space_lg">
      <div className="container">
        <div className="pricing_items_group row">
          <div className="col col-xl-3 col-lg-4 col-md-6">
            <div className="pricing_item">
              <h3 className="item_title">Nano</h3>
              <div className="price_value">
                <strong>20$</strong>
                <sub>/Months</sub>
              </div>
              <p>
                Alternatively, you can also have product tier names
              </p>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">06 Home Page</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">30+ Inner Page Design</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Fully Responsive</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Figma File Included</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Custom Plugin</span>
                </li>
              </ul>
              <Link href="/pricing" className="bd-btn-link outline-dark">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">Order Now</span>
                      <span className="bd-button-text">Order Now</span>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col col-xl-3 col-lg-4 col-md-6">
            <div className="pricing_item">
              <h3 className="item_title">Micro</h3>
              <div className="price_value">
                <strong>50$</strong>
                <sub>/Months</sub>
              </div>
              <p>
                Alternatively, you can also have product tier names
              </p>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">06 Home Page</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">30+ Inner Page Design</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Fully Responsive</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Figma File Included</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Custom Plugin</span>
                </li>
              </ul>
              <Link href="/pricing" className="bd-btn-link outline-dark">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">Order Now</span>
                      <span className="bd-button-text">Order Now</span>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col col-xl-3 col-lg-4 col-md-6">
            <div className="pricing_item recomanded_item" style={{ backgroundImage: `url(${shape_dots_BG.src})` }}>
              <h3 className="item_title">Mega</h3>
              <div className="price_value">
                <strong>99$</strong>
                <sub>/Months</sub>
              </div>
              <p>
                Alternatively, you can also have product tier names
              </p>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">06 Home Page</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">30+ Inner Page Design</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Fully Responsive</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Figma File Included</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Custom Plugin</span>
                </li>
              </ul>
              <Link href="/about" className="bd-btn-link btn_warning">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">Order Now</span>
                      <span className="bd-button-text">Order Now</span>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col col-xl-3 col-lg-4 col-md-6">
            <div className="pricing_item">
              <h3 className="item_title">Giga</h3>
              <div className="price_value">
                <strong>130$</strong>
                <sub>/Months</sub>
              </div>
              <p>
                Alternatively, you can also have product tier names
              </p>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">06 Home Page</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">30+ Inner Page Design</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Fully Responsive</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Figma File Included</span>
                </li>
                <li>
                  <span className="list_item_icon">
                    <i className="fas fa-check"></i>
                  </span>
                  <span className="list_item_text">Custom Plugin</span>
                </li>
              </ul>
              <Link href="/pricing" className="bd-btn-link outline-dark">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">Order Now</span>
                      <span className="bd-button-text">Order Now</span>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default PricingSection;