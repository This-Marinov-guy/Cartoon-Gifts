import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import ServiceFour from './service-four';
import PolicySection from '../service-main-area/policy-section';
import PortfolioFour from './portfolio-four';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Service V4' subTitle='Service V4' />
            <ServiceFour />
            <PortfolioFour />
            <PolicySection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;