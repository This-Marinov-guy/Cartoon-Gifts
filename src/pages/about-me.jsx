import AboutTwoArea from '@components/extra-page/about-two-area';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'About Me'} />
            <AboutTwoArea />
        </Wrapper>
    );
};

export default Index;