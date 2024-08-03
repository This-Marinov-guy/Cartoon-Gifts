import Link from 'next/link';
import React from 'react';
import blogs_data from '@data/blogs-data';
import Image from 'next/image';
import icon_search from '@assets/images/icons/icon_search_white.svg'
import Pagination_Data from '@components/common/pagination';
import BlogSidebarSection from '../blog-sidebar/blog-sidebar';
import useTranslation from 'next-translate/useTranslation';
const BlogSection = () => {
    const { t } = useTranslation('components');
  return (
    <section className="blog_section section_space_lg">
      <div className="container">
        <div className="blog_classic_grouped row justify-content-center">
          <div className="col col-lg-8">
            {
              blogs_data.slice(0, 3).map((item) => (
                <div className="blog_item" key={item.id}>
                  <Link className="item_image" href={`/blog-details/${item.id}`} data-cursor-text={t('view')}>
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
                    <p>

                    </p>
                    <Link className="btn-link" href={`/blog-details/${item.id}`}>
                      <span className="btn_text">{t('readMore')}</span>
                      <span className="btn_icon">
                        <Image src={item.btnIcon} style={{ width: "100%", height: "100%" }} alt={t('iconArrowAlt')} />
                        <Image src={item.btnIconTwo} style={{ width: "100%", height: "100%" }} alt={t('iconArrowAlt')} />
                      </span>
                    </Link>
                  </div>
                </div>
              ))
            }
            <Pagination_Data wrapClass="pagination_wrap p-0" navClass="pagination_nav unordered_list" />
          </div>

          <div className="col col-lg-4">
            <BlogSidebarSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;