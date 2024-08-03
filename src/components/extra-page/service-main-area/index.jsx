import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import ServicesSection from './services-section';
import PortfolioSection from './portfolio-section';
import CollectionSection from '@components/home/collection-section';
import PolicySection from './policy-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('components');
    return (
        <main>
            <Header />
            <Breadcrumb title={t('extra-page.service-main-area.index.title')} subTitle={t('extra-page.service-main-area.index.subTitle')} />
            <ServicesSection />
            <PortfolioSection />
            <PolicySection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;