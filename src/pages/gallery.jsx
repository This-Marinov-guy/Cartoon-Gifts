import PortfolioMainArea from '@components/extra-page/portfolio-main-area';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import HeaderSix from '@layout/header/header-6';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('pages');
  return (
    <Wrapper>
      <SEO pageTitle={t('gallery-title')} />
      <HeaderSix />
      <PortfolioMainArea />
    </Wrapper>
  );
};

export default Index;