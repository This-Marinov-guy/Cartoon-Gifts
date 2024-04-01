import PortfolioMasonryArea from '@components/extra-page/portfolio-masonry-area';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Masonry'} />
      <PortfolioMasonryArea />
    </Wrapper>
  );
};

export default Index;