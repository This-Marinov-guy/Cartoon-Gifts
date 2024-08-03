import PortfolioDetailsArea from '@components/extra-page/portfolio-details';
import SEO from '@components/seo';
import portfolio_data from '@data/common_data/portfolio-data';
import Wrapper from '@layout/wrapper';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

const PortfolioDetails = () => {
    const router = useRouter()
    const id = router.query.id;
    const { t } = useTranslation('pages');
    const [portfolio, setPortfilio] = useState({})
    useEffect(() => {
        if (!id) (<h1>{t('portfolio-details.loading')}...</h1>)
        else (setPortfilio(portfolio_data.find(item => item.id == id)))
        return () => {

        }
    }, [id])
    return (
        <Wrapper>
            <SEO pageTitle={t('portfolio-details.title')} />
            <PortfolioDetailsArea item={portfolio} />
        </Wrapper>
    );
};

export default PortfolioDetails;