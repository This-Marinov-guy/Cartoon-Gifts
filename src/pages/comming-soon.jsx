import CommingSoon from '@components/extra-page/comming-soon/comming-soon';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('pages');
    return (
        <Wrapper>
        <SEO pageTitle={t('comming-soon-title')} />
         <CommingSoon/>
      </Wrapper>
    );
};

export default Index;