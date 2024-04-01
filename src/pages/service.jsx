import SEO from '@components/seo';
import ServiceMainArea from '@components/extra-page/service-main-area';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Services'} />
      <ServiceMainArea />
    </Wrapper>
  );
};

export default Index;