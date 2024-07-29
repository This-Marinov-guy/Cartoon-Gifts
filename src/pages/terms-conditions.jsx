import TermsConditionsArea from '@components/extra-page/terms_conditions-area';
import SEO from '@components/seo';
import HeaderSix from '@layout/header/header-6';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Terms & Condition'} />
      <HeaderSix />
      <TermsConditionsArea />
    </Wrapper>
  );
};

export default Index;