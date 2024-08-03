import React from 'react';
import dynamic from "next/dynamic";
import useTranslation from 'next-translate/useTranslation';
const Counter = dynamic(() => import('extra-page.about-page.counter-section.../../common/counter/CountUpContent'), {
  ssr: false
})
const CounterSection = () => {
    const { t } = useTranslation('components');

  const factList = [
    {
      id: 1,
      factTitle: 'Worldwide Happy Client',
      factNumber: '2000',
      data_count: "2400",
      data_parallax: '{"y" : 30, "smoothness": 10}',
      adition: '+'
    },
    {
      id: 2,
      factTitle: 'Completed Project',
      factNumber: '9250',
      data_count: "1690",
      adition: '+'
    },
    {
      id: 3,
      factTitle: 'Client Satisfaction',
      factNumber: '3200',
      data_count: "100",
      data_parallax: '{"y" : -30, "smoothness": 10}',
      adition: '%'
    }
  ]

  return (
    <section className="counter_section section_space_lg decoration_wrap">
      <div className="container">
          {
            factList &&
            <div className="row">
              {
                factList.map((item) => (
                    <div className="col col-lg-4 col-md-6" data-parallax={item.data_parallax} key={item.id}>
                      <div className="counter_item mb-5 mb-lg-0">
                        <div className="counter_value d-flex justify-content-center">
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
        <img src="assets/images/shapes/shape_line_flow.svg" alt={t('extra-page.about-page.counter-section.paradoxShapesImageLineFlow')} />
      </div>
      <div className="deco_item shape_2">
        <img src="assets/images/shapes/shape_circle_2.svg" alt={t('extra-page.about-page.counter-section.paradoxShapesCircle')} />
      </div>
    </section>
  );
};

export default CounterSection;