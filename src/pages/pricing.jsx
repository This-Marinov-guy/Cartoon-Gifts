import PricingSectionMain from '@components/extra-page/pricing';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Pricing'} />
      <PricingSectionMain />
    </Wrapper>
  );
};

export default Index;