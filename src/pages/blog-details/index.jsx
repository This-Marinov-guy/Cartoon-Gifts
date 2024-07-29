import BlogDetailsArea from '@components/extra-page/blog-details';
import SEO from '@components/seo';
import blogs_data from '@data/blogs-data';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
    const item = blogs_data[0]
    return (
        <Wrapper>
            <SEO pageTitle={'Blog Details'} />
            <BlogDetailsArea item={item} />
        </Wrapper>
    );
};

export default Index;