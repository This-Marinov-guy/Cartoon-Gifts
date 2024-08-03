import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import dynamic from "next/dynamic";
import useTranslation from 'next-translate/useTranslation';
const PortfolioSectionMain = dynamic(() => import('./portfolio-section-main'), {
  ssr: false
})


const Index = () => {
    const { t } = useTranslation('components');
    return (
        <main>
            <Header />
            <Breadcrumb title={t('extra-page.portfolio-fulwidth.index.title')} subTitle={t('extra-page.portfolio-fulwidth.index.subTitle')} />
            <PortfolioSectionMain />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;