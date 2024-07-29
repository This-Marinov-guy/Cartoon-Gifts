import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import dynamic from "next/dynamic";
const PortfolioSectionMain = dynamic(() => import('./portfolio-section-main'), {
  ssr: false
})

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Portfolio Fullwidth' subTitle='Portfolio Fullwidth' />
            <PortfolioSectionMain />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;