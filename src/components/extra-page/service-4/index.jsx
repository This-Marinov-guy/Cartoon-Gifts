import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import ServiceFour from './service-four';
import PolicySection from '../service-main-area/policy-section';
import PortfolioFour from './portfolio-four';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('components');
    return (
        <main>
            <Header />
            <Breadcrumb title={t('extra-page.service-4.index.title')} subTitle={t('extra-page.service-4.index.subTitle')} />
            <ServiceFour />
            <PortfolioFour />
            <PolicySection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;