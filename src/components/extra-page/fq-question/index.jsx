import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import FaqSection from '@components/extra-page/service-details/faq-section';
import CommonQuetion from './common-quetion';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Frequently Asked Questions' subTitle='FAQ' />
            <FaqSection />
            <CommonQuetion />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;