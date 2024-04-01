import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import ServiceTwo from './service-two';
import PortfolioSection from '../service-main-area/portfolio-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import PolicySection from '../service-main-area/policy-section';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Service V2' subTitle='Service V2' />
            <ServiceTwo />
            <PortfolioSection />
            <PolicySection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;