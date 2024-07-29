import SEO from '@components/seo';
import ServiceDetailsArea from '@components/extra-page/service-details';
import React from 'react';
import services_data from '@data/common_data/service-data';
import Wrapper from '@layout/wrapper';

const Index = () => {
    const item = services_data[0]
    return (
        <Wrapper>
            <SEO pageTitle={'Service Details'} />
            <ServiceDetailsArea item={item} />
        </Wrapper>
    );
};

export default Index;