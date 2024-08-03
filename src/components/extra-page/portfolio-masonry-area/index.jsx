import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import PortfolioMasonrySection from './portfolio-masonry-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('components');
    return (
        <main>
            <Header />
            <Breadcrumb title={t('extra-page.portfolio-masonry-area.title')} subTitle={t('extra-page.portfolio-masonry-area.subTitle')} />
            <PortfolioMasonrySection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;