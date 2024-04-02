import PortfolioMainArea from '@components/extra-page/portfolio-main-area';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Gallery'} />
      <PortfolioMainArea />
    </Wrapper>
  );
};

export default Index;