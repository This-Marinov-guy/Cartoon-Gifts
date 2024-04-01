import AboutPage from '@components/extra-page/about-page';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'About Us'} />
            <AboutPage />
        </Wrapper>
    );
};

export default Index;