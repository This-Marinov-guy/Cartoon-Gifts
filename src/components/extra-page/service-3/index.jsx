import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import PolicySection from '../service-main-area/policy-section';
import PortfolioSection from '../service-main-area/portfolio-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import ServiceSectionThree from './service-section-three';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('components');
    return (
        <main>
            <Header />
            <Breadcrumb title={t('extra-page.service-3.title')} subTitle={t('extra-page.service-3.subTitle')} />
            <ServiceSectionThree />
            <PortfolioSection />
            <PolicySection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;