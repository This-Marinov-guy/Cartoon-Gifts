import PolicyPrivacyArea from '@components/extra-page/privacy-policy-area';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Privacy Policy'} />
      <PolicyPrivacyArea />
    </Wrapper>
  );
};

export default Index;