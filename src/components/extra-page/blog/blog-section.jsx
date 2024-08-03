import React from 'react';
import blogs_data from '@data/blogs-data';
import Link from 'next/link';
import Image from 'next/image';
import Pagination_Data from '@components/common/pagination';
import useTranslation from 'next-translate/useTranslation';

const BlogSection = () => {
    const { t } = useTranslation('components');
  return (
    <section className="blog_section section_space_lg">
      <div className="container">
        <div className="blog_grouped row">

          {
            blogs_data.slice(0, 9).map((item) => (
              <div className="col col-lg-4 col-md-6" key={item.id}>
                <div className="blog_item">
                  <Link className="item_image" href={`/blog-details/${item.id}`} data-cursor-text="VIEW">
                    <Image src={item.img} style={{ width: "100%", height: "100%" }} alt={t('extra-page.blog.blog-section.blogImageAlt')} />
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
                      <span className="btn_text">{t('extra-page.blog.blog-section.readMore')}</span>
                      <span className="btn_icon">
                        <Image src={item.btnIcon} style={{ width: "100%", height: "100%" }} alt={t('extra-page.blog.blog-section.iconArrowAlt')} />
                        <Image src={item.btnIconTwo} style={{ width: "100%", height: "100%" }} alt={t('extra-page.blog.blog-section.iconArrowAlt')} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <Pagination_Data />
      </div>
    </section>
  );
};

export default BlogSection;