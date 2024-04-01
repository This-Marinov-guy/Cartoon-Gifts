import BlogClassicArea from '@components/extra-page/blog-classic-area';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Blog Classic'} />
            <BlogClassicArea />
        </Wrapper>
    );
};

export default Index;