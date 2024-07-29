import React from 'react';
import PricingSection from './pricing-section';
import FaqQuestion from './faq-question';
import CollectionSection from '@components/home/collection-section';
import Header from '@layout/header/header';
import Footer from '@layout/footer/footer';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Pricing' subTitle='Pricing' />
            <PricingSection />
            <FaqQuestion />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;