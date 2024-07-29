import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import PortfolioMasonrySection from './portfolio-masonry-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Portfolio Masonry' subTitle='Portfolio Masonry' />
            <PortfolioMasonrySection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;