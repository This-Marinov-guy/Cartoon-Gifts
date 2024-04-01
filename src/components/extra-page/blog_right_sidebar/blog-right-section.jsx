
import Pagination_Data from '@components/common/pagination';
import blogs_data from '@data/blogs-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import icon_search from '@assets/images/icons/icon_search_white.svg'
import BlogSidebarSection from '../blog-sidebar/blog-sidebar';


const BlogRightSection = () => {
  return (
    <section className="blog_section section_space_lg">
      <div className="container">
        <div className="blog_grouped row justify-content-center">
          <div className="col col-lg-8">
            <div className="blog_wrapper">
              <div className="row">

                {
                  blogs_data.slice(0, 8).map((item) => (
                    <div className="col col-lg-6" key={item.id}>
                      <div className="blog_item">
                        <Link className="item_image" href={`/blog-details/${item.id}`} data-cursor-text="VIEW">
                          <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="Paradox Blog Image" />
                        </Link>
                        <div className="item_content">
                          <div className="flex_wrap">
                            <ul className="category_list unordered_list">
                              <li><Link href="/blog-details">{item.blogCat}</Link></li>
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
                  ))
                }
              </div>
            </div>
            <Pagination_Data navClass="pagination_nav unordered_list" />
          </div>
          <div className="col col-lg-4">
            <BlogSidebarSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogRightSection;