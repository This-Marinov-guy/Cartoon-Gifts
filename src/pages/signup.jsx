import SignupMainArea from '@components/extra-page/signup-main-area/signup-main-area';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('pages');
    return (
        <Wrapper>
        <SEO pageTitle={t('signup-title')} />
        <SignupMainArea/>
      </Wrapper>
    );
};

export default Index;