import PortfolioFulwidthArea from '@components/extra-page/portfolio-fulwidth';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Fulwidth'} />
      <PortfolioFulwidthArea />
    </Wrapper>
  );
};

export default Index;