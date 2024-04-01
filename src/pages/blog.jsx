import BlogMainArea from '@components/extra-page/blog';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Blog'} />
            <BlogMainArea />
        </Wrapper>
    );
};

export default Index;