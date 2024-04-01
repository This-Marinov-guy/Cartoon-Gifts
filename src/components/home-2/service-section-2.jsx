import Link from 'next/link'
import Image from 'next/image'
import shape_boxe from '@assets/images/shapes/shape_box_2.png'
import service_data from '@data/common_data/service-data'

const ServiceSectionTwo = () => {
  return (
    <section className="my_service_section bg_dark_3 section_space_lg">
      <div className="container decoration_wrap">
        <div className="row">
          <div className="col col-xl-4 col-lg-4">
            <div className="intro_wrapper mb-4 mb-lg-0">
              <div className="section_heading style_2 text-white">
                <h2 className="heading_subtitle">
                  <span>My Services</span>
                </h2>
                <h3 className="heading_title mb-0">
                  Offering latest services
                </h3>
              </div>
              <Link href="/service" className="bd-btn-link btn_danger">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">More Service</span>
                      <span className="bd-button-text">More Service</span>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
          {service_data.slice(14, 16).map((item) => (
            <div className="col col-xl-4 col-lg-4 col-md-6" key={item.id}>
              <div className="service_item style_3 color_danger text-white">
                <div className="item_icon">
                  <Image src={item.icon_gallery} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration" />
                </div>
                <div className="item_content">
                  <h3 className="item_title">
                    {item.title}
                  </h3>
                  <p className="item_description">
                    {item.description}
                  </p>
                </div>
                <Link className="btn-link" href={`/service-details/${item.id}`}>
                  <span className="btn_text">View Details</span>
                  <span className="btn_icon">
                    <Image src={item.icon_arrow_down} style={{ width: "100%", height: "100%" }} alt="Paradox icons" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="deco_item shape_1" data-parallax='{"y" : -200, "smoothness": 20}'>
          <Image src={shape_boxe} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
        </div>
        <div className="deco_item shape_2" data-parallax='{"y" : 200, "smoothness": 20}'>
          <Image src={shape_boxe} style={{ width: "100%", height: "100%" }} alt="Paradox Illustration Image" />
        </div>
      </div>
    </section>
  )
}
export default ServiceSectionTwo;