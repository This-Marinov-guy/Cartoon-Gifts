import React from 'react';
import icon_development from '@assets/images/icons/icon_development.svg'
import icon_flexibility from '@assets/images/icons/icon_flexibility.svg'
import icon_design from '@assets/images/icons/icon_design.svg'
import icon_maintenance from '@assets/images/icons/icon_maintenance.svg'
import shape_line_flow from '@assets/images/shapes/shape_line_flow.svg'
import shape_circle_2 from '@assets/images/shapes/shape_circle_2.svg'
import Image from 'next/image';

const PolicySection = () => {
  return (
    <section className="policy_section section_space_lg decoration_wrap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-lg-6 col-md-8">
            <div className="section_heading text-center">
              <h2 className="heading_subtitle text-uppercase">
                <span className="double_icon">
                  <i className="fas fa-sharp fa-square-full"></i>
                  <i className="fas fa-sharp fa-square-full"></i>
                </span>
                <span>Why Chose Us</span>
              </h2>
              <h3 className="heading_title mb-0">
                We are Moving to a Higher & Better Stage.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-3 col-md-6 col-sm-6" data-parallax='{"y" : 30, "smoothness": 10}'>
            <div className="iconbox_item policy_item mb-4 mb-sm-0">
              <div className="item_icon">
                <Image src={icon_development} alt="Paradox Icon Eye White" />
              </div>
              <div className="item_content">
                <h3 className="item_title">Fast Development</h3>
                <p className="mb-0">
                  We can launch a small site less then a week. So you can drop a Order.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-6" data-parallax='{"y" : -30, "smoothness": 10}'>
            <div className="iconbox_item policy_item">
              <div className="item_icon">
                <Image src={icon_flexibility} alt="Paradox Icon Eye White" />
              </div>
              <div className="item_content">
                <h3 className="item_title">Full Flexibility</h3>
                <p className="mb-0">
                  Multiple development tools help us create. So you can drop a Order.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-6" data-parallax='{"y" : 30, "smoothness": 10}'>
            <div className="iconbox_item policy_item mb-4 mb-sm-0">
              <div className="item_icon">
                <Image src={icon_design} alt="Paradox Icon Eye White" />
              </div>
              <div className="item_content">
                <h3 className="item_title">Modern Design</h3>
                <p className="mb-0">
                  Most modern approaches to any design. So you can drop a Order.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-6" data-parallax='{"y" : -30, "smoothness": 10}'>
            <div className="iconbox_item policy_item">
              <div className="item_icon">
                <Image src={icon_maintenance} alt="Paradox Icon Eye White" />
              </div>
              <div className="item_content">
                <h3 className="item_title">Simple Maintenance</h3>
                <p className="mb-0">
                  Multiple development tools help us create. So you can drop a Order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="deco_item shape_1">
        <Image src={shape_line_flow} style={{ width: "100%", height: "100%" }} alt="Paradox Shapes Image Line Flow" />
      </div>
      <div className="deco_item shape_2">
        <Image src={shape_circle_2} style={{ width: "100%", height: "100%" }} alt="Paradox Shapes Circle" />
      </div>
    </section>
  );
};

export default PolicySection;