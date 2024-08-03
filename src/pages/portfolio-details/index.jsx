import PortfolioDetailsArea from '@components/extra-page/portfolio-details';
import SEO from '@components/seo';
import portfolio_data from '@data/common_data/portfolio-data';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('pages');
    const item = portfolio_data[0]

    return (
        <>
            <SEO pageTitle={t('portfolio-details.title')} />
            <PortfolioDetailsArea item={item} />
        </>
    );
};

export default Index;