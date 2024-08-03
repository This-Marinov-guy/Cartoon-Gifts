import TermsConditionsArea from '@components/extra-page/terms_conditions-area';
import SEO from '@components/seo';
import HeaderSix from '@layout/header/header-6';
import Wrapper from '@layout/wrapper';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('pages');
  return (
    <Wrapper>
      <SEO pageTitle={t('terms-and-conditions-title')} />
      <HeaderSix />
      <TermsConditionsArea />
    </Wrapper>
  );
};

export default Index;