import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import HeaderSix from '@layout/header/header-6';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import dynamic from "next/dynamic";
import AboutSectionSix from '@components/home-6/about-section-6';
const PortfolioSection = dynamic(() => import('./portfolio-section'))

const Index = () => {
    return (
        <main>
            <HeaderSix />
            <Breadcrumb title='Gallery' subTitle='Gallery' />
            <AboutSectionSix />
            <PortfolioSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;