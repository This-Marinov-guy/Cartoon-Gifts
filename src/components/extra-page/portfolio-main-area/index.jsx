import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import dynamic from "next/dynamic";
const PortfolioSection = dynamic(() => import('./portfolio-section'), {
  ssr: false
})

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Portfolio Modern' subTitle='Portfolio Modern' />
            <PortfolioSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;