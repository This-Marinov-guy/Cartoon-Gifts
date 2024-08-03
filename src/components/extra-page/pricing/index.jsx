import React from 'react';
import PricingSection from './pricing-section';
import FaqQuestion from './faq-question';
import CollectionSection from '@components/home/collection-section';
import Header from '@layout/header/header';
import Footer from '@layout/footer/footer';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('components');
    return (
        <main>
            <Header />
            <Breadcrumb title={t('extra-page.pricing.index.title')} subTitle={t('extra-page.pricing.index.subTitle')} />
            <PricingSection />
            <FaqQuestion />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;