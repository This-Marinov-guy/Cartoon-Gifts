import React from 'react';

import dynamic from "next/dynamic";
const Counter = dynamic(() => import('../common/counter/CountUpContent'), {
  ssr: false
})

const CounterSectionSix = () => {
  const factList = [
    {
      id: 1,
      factTitle: 'Worldwide Happy Client',
      factNumber: '600',
      data_count: "2400",
      data_parallax: '{"y" : 30, "smoothness": 10}',
      adition: '+'
    },
    {
      id: 2,
      factTitle: 'Completed Project',
      factNumber: '1000',
      data_count: "1690",
      adition: '+'
    },
    {
      id: 3,
      factTitle: 'Client Satisfaction',
      factNumber: '100',
      data_count: "100",
      data_parallax: '{"y" : -30, "smoothness": 10}',
      adition: '%'
    }
  ]


  return (
    <section className="counter_section section_space_lg pb-0 decoration_wrap">
      <div className="container">
        {
          factList &&
          <div className="row">
            {
              factList.map((item) => (
                  <div className="col col-lg-4 col-md-6" data-parallax={item.data_parallax} key={item.id}>
                    <div className="counter_item mb-5 mb-lg-0">
                      <div className="counter_value d-flex justify-content-center ">
                        <Counter number={item.factNumber}></Counter><span className="odometer" data-count={item.data_count}></span>
                        <sup>{item.adition}</sup>
                      </div>
                      <h3 className="counter_title mb-0">{item.factTitle}</h3>
                    </div>
                  </div>
              ))
            }
          </div>
        }
      </div>
      <div className="deco_item shape_1">
        <img src="assets/images/shapes/shape_line_flow.svg" alt="Paradox Shapes Image Line Flow" />
      </div>
      <div className="deco_item shape_2">
        <img src="assets/images/shapes/shape_circle_2.svg" alt="Paradox Shapes Circle" />
      </div>
      <div className="deco_item shape_3" data-parallax='{"y" : 100, "smoothness": 20}'>
        <img src="assets/images/shapes/shape_circle_1.svg" alt="Paradox Shapes Circle" />
      </div>
      <div className="deco_item shape_4" data-parallax='{"y" : -200, "smoothness": 20}'>
        <img src="assets/images/shapes/shape_8.svg" alt="Paradox Shape" />
      </div>
    </section>
  );
};

export default CounterSectionSix;