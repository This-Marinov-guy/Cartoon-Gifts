import PortfolioDetailsArea from '@components/extra-page/portfolio-details';
import SEO from '@components/seo';
import portfolio_data from '@data/common_data/portfolio-data';
import React from 'react';

const Index = () => {

    const item = portfolio_data[0]

    return (
        <>
            <SEO pageTitle={'Portfolio Details'} />
            <PortfolioDetailsArea item={item} />
        </>
    );
};

export default Index;