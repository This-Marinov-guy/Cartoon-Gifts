import PortfolioGridArea from '@components/extra-page/portfolio-grid-area';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Grid'} />
      <PortfolioGridArea />
    </Wrapper>
  );
};

export default Index;