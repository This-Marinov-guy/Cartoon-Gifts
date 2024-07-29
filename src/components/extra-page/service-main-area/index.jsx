import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import ServicesSection from './services-section';
import PortfolioSection from './portfolio-section';
import CollectionSection from '@components/home/collection-section';
import PolicySection from './policy-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Service V1' subTitle='Service V1' />
            <ServicesSection />
            <PortfolioSection />
            <PolicySection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;