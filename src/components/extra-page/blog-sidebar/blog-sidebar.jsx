import Link from 'next/link';
import React from 'react';
import blogs_data from '@data/blogs-data';
import Image from 'next/image';
import icon_search from '@assets/images/icons/icon_search_white.svg'
import Pagination_Data from '@components/common/pagination';
import BlogSearch from './blog-search';
import Categories from './categories';
import PostCategories from './post-categories';
import TagList from './tag-list';

const BlogSidebarSection = () => {
    return (
        <div className="sidebar">
            <BlogSearch />
            <Categories />
            <PostCategories />
            <TagList />
        </div>
    );
};

export default BlogSidebarSection;