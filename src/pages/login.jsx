import SigninMainArea from '@components/extra-page/signin';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('pages');
    return (
        <Wrapper>
        <SEO pageTitle={t('login-title')} />
        <SigninMainArea/>
      </Wrapper>
    );
};

export default Index;