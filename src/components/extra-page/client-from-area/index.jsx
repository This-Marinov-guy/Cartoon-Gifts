import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import ClientFromSection from './client-from-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Client Form' subTitle='Client Form' />
            <ClientFromSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;