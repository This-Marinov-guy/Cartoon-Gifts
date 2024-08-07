import React from 'react';
import Link from 'next/link';
import blogs_data from '@data/blogs-data';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const BlogSectionSix = () => {
    const { t } = useTranslation('components');
  return (
    <section className="blog_section section_space_lg">
      <div className="container">
        <div className="section_heading style_4">
          <div className="row align-items-end">
            <div className="col col-lg-6">
              <h2 className="heading_subtitle">
                <span>{t('home-6.blog-section-6.ourSubtitle')}</span>
              </h2>
              <h3 className="heading_title mb-0">
              {t('home-6.blog-section-6.ourTitle')}
              </h3>
            </div>
            <div className="col col-lg-6 d-none d-lg-block text-lg-end">
              <Link href="/blog" className="bd-btn-link btn_primary">
                <span className="bd-button-content-wrapper">
                  <span className="bd-button-icon">
                    <i className="fa-light fa-arrow-right-long"></i>
                  </span>
                  <span className="pd-animation-flip">
                    <span className="bd-btn-anim-wrapp">
                      <span className="bd-button-text">{t('home-6.blog-section-6.viewAllBlogs')}</span>
                      <span className="bd-button-text">{t('home-6.blog-section-6.viewAllBlogs')}</span>
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {blogs_data.slice(0, 2).map((item) => (
            <div className="col col-lg-6" key={item.id}>
              <div className="blog_item">
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
                  <div className="flex_wrap">
                    <div className="admin_item">
                      <div className="admin_thumbnail">
                        <Image src={item.authorImg} style={{ width: "100%", height: "100%" }} alt="Admin Avatar" />
                      </div>
                      <div className="admin_info">
                        <h3 className="admin_name">{item.user}</h3>
                        <span className="admin_designation">{item.work}</span>
                      </div>
                    </div>
                    <Link className="btn-link" href={`/blog-details/${item.id}`}>
                      <span className="btn_text">{t('home-6.blog-section-6.readMore')}</span>
                      <span className="btn_icon">
                        <Image src={item.btnIcon} style={{ width: "100%", height: "100%" }} alt="Paradox - Icon Arrow Down Right" />
                        <Image src={item.btnIconTwo} style={{ width: "100%", height: "100%" }} alt="Paradox - Icon Arrow Down Right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSectionSix;