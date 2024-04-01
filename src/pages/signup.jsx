import SignupMainArea from '@components/extra-page/signup-main-area/signup-main-area';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
    return (
        <Wrapper>
        <SEO pageTitle={'SignUp'} />
        <SignupMainArea/>
      </Wrapper>
    );
};

export default Index;