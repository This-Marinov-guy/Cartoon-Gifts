import PricingSectionMain from '@components/extra-page/pricing';
import SEO from '@components/seo';
import HeaderSix from '@layout/header/header-6';
import Wrapper from '@layout/wrapper';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('pages');
  return (
    <Wrapper>
      <SEO pageTitle={t('pricing-title')} />
      <HeaderSix />
      <PricingSectionMain />
    </Wrapper>
  );
};

export default Index;