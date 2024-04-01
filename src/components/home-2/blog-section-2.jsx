import React from 'react';
import Link from 'next/link';
import blogs_data from '@data/blogs-data';
import Image from 'next/image';

const BlogSectionTwo = () => {
  return (
    <section className="blog_section section_space_lg">
      <div className="container">
        <div className="section_heading text-center">
          <h2 className="heading_subtitle text-uppercase">
            <span className="double_icon">
              <i className="fas fa-sharp fa-square-full"></i>
              <i className="fas fa-sharp fa-square-full"></i>
            </span>
            <span>Latest News</span>
          </h2>
          <h3 className="heading_title mb-0">
            Our Latest News
          </h3>
        </div>
        <div className="row justify-content-center">
          {blogs_data.slice(0, 2).map((item) => (
            <div className="col col-lg-6" key={item.id}>
              <div className="blog_item bg_light_2">
                <Link className="item_image" href={`/blog-details/${item.id}`} data-cursor-text="VIEW">
                  <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="Paradox Blog Image" />
                </Link>
                <div className="item_content">
                  <div className="flex_wrap">
                    <ul className="category_list unordered_list">
                      <li><Link href="/blog">{item.blogCat}</Link></li>
                    </ul>
                    <span className="post_date">{item.date}</span>
                  </div>
                  <h3 className="item_title">
                    <Link href={`/blog-details/${item.id}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <Link className="btn-link" href={`/blog-details/${item.id}`}>
                    <span className="btn_text">Read More</span>
                    <span className="btn_icon">
                      <Image src={item.btnIcon} style={{ width: "100%", height: "100%" }} alt="Paradox - Icon Arrow Down Right" />
                      <Image src={item.btnIconTwo} style={{ width: "100%", height: "100%" }} alt="Paradox - Icon Arrow Down Right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn_wrap pb-0 text-center">
          <Link href="/blog" className="bd-btn-link outline-dark">
            <span className="bd-button-content-wrapper">
              <span className="bd-button-icon">
                <i className="fa-light fa-arrow-right-long"></i>
              </span>
              <span className="pd-animation-flip">
                <span className="bd-btn-anim-wrapp">
                  <span className="bd-button-text">View More</span>
                  <span className="bd-button-text">View More</span>
                </span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};


export default BlogSectionTwo;