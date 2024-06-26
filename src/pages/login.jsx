import SigninMainArea from '@components/extra-page/signin';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
    return (
        <Wrapper>
        <SEO pageTitle={'Log In'} />
        <SigninMainArea/>
      </Wrapper>
    );
};

export default Index;