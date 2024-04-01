import BlogRightSidebarArea from '@components/extra-page/blog_right_sidebar';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Blog Right Sidebar'} />
            <BlogRightSidebarArea />
        </Wrapper>
    );
};

export default Index;