import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import ClientFromSection from './client-from-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import useTranslation from 'next-translate/useTranslation';
const Index = () => {
    const { t } = useTranslation('components');
    return (
        <main>
            <Header />
            <Breadcrumb title={t('extra-page.client-from-area.index.clientFromTitle')} subTitle={t('extra-page.client-from-area.index.clientFromSubTitle')} />
            <ClientFromSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;