import PricingSectionMain from '@components/extra-page/pricing';
import SEO from '@components/seo';
import HeaderSix from '@layout/header/header-6';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Pricing'} />
      <HeaderSix />
      <PricingSectionMain />
    </Wrapper>
  );
};

export default Index;