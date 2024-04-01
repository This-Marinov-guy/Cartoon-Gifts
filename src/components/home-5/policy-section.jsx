import React from 'react';
import shape_circle_7 from '@assets/images/shapes/shape_circle_7.svg'
import Image from 'next/image';

const PolicySection = () => {
  return (
    <section className="policy_section section_space_md bg_primary decoration_wrap">
      <div className="container">
        <div className="row">
          <div className="col col-lg-4 col-md-6 col-sm-6">
            <div className="iconbox_item policy_item_2 text-white">
              <div className="serial_number">01</div>
              <div className="item_content">
                <h3 className="item_title">Money Care</h3>
                <p className="mb-0">
                  We help to generte positive cash flow and use the proceeds in further eansions
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-6 col-sm-6">
            <div className="iconbox_item policy_item_2 text-white">
              <div className="serial_number">02</div>
              <div className="item_content">
                <h3 className="item_title">Friendly Assistance</h3>
                <p className="mb-0">
                  We help to generte positive cash flow and use the proceeds in further eansions
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-6 col-sm-6">
            <div className="iconbox_item policy_item_2 text-white">
              <div className="serial_number">03</div>
              <div className="item_content">
                <h3 className="item_title">Client Investment</h3>
                <p className="mb-0">
                  We help to generte positive cash flow and use the proceeds in further eansions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="deco_item shape_3">
        <Image data-parallax='{"y" : 150, "smoothness": 20}' src={shape_circle_7} alt="Paradox Illustration Image" />
      </div>
    </section>
  );
};

export default PolicySection;