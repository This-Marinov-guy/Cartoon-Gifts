import ServiceFourArea from '@components/extra-page/service-4';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Service Four'} />
            <ServiceFourArea />
        </Wrapper>
    );
};

export default Index;