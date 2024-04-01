import React from 'react';
import funfact_bg from '@assets/images/shapes//funfact_bg.svg'
import dynamic from "next/dynamic";
const Counter = dynamic(() => import('../common/counter/CountUpContent'), {
  ssr: false
})



const factList = [
  {
    id: 1,
    data_count: '120',
    fact_num: 500,
    addition: '+',
    counter_title: 'Successful Projects',

  },
  {
    id: 2,
    data_count: '99',
    fact_num: 99,
    addition: '%',
    counter_title: 'Happy Clients',
  },
]

const FunfactSection = () => {
  return (
    <section className="funfact_section">
      <div className="container">
        <div className="funfact_box text-white" style={{ backgroundImage: `url(${funfact_bg.src})` }}>

          {
            factList &&
            factList.map((item) => (
              <div className="funfact_item" key={item.id}>
                <div className="counter_value d-flex justify-content-center">
                  <Counter number={item.fact_num}><span className="odometer" data-count={item.data_count}></span></Counter>{item.addition}
                </div>
                <h3 className="counter_title mb-0">{item.counter_title}</h3>
              </div>
            ))
          }
          <div className="funfact_item">
            <p className="m-0">
              Our action plan is focused and planned. We are result oriented organization and are committed to invest in initiatives for newer expanded
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunfactSection;