
import ServiceThereArea from '@components/extra-page/service-3';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Service There'} />
            <ServiceThereArea />
        </Wrapper>
    );
};

export default Index;