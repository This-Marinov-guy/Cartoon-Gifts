import React from 'react';
import blogs_data from '@data/blogs-data';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const PostCategories = () => {
    const { t } = useTranslation('components');
    return (
        <div className="sidebar_widget">
            <h3 className="widget_title">
                {t('recentPost')}
            </h3>
            <ul className="recent_post_list unordered_list_block">
                {
                    blogs_data.slice(6, 9).map((item) => (
                        <li key={item.id}>
                            <div className="recent_post_item">
                                <Link className="item_image" href={`/blog-details/${item.id}`}>
                                    <Image src={item.img} style={{ width: "100%", height: "100%" }} alt={t('paradoxBlogImage')} />
                                </Link>
                                <div className="item_content">
                                    <ul className="meta_list unordered_list">
                                        <li><Link href="/blog-details">{item.blogCat}</Link></li>
                                        <li><span>{item.date}</span></li>
                                    </ul>
                                    <h3 className="item_title">
                                        <Link href={`/blog-details/${item.id}`}>
                                            {item.title}
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PostCategories;