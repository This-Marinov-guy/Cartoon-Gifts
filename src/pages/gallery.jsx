import PortfolioMainArea from '@components/extra-page/portfolio-main-area';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import HeaderSix from '@layout/header/header-6';
import React from 'react';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Gallery'} />
      <HeaderSix />
      <PortfolioMainArea />
    </Wrapper>
  );
};

export default Index;