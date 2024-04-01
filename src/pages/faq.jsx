import FqMainArea from '@components/extra-page/fq-question';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Faq'} />
            <FqMainArea />
        </Wrapper>
    );
};

export default Index;