import SEO from '@components/seo';
import ServiceDetailsArea from '@components/extra-page/service-details';
import React from 'react';
import services_data from '@data/common_data/service-data';
import Wrapper from '@layout/wrapper';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('pages');
    const item = services_data[0]
    return (
        <Wrapper>
            <SEO pageTitle={t('service-details.title')} />
            <ServiceDetailsArea item={item} />
        </Wrapper>
    );
};

export default Index;