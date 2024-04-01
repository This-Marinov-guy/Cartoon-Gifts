import ServiceTwoMain from '@components/extra-page/service-two';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Service Two'} />
      <ServiceTwoMain />
    </Wrapper>
  );
};

export default Index;