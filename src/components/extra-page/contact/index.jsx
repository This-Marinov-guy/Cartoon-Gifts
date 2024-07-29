import Footer from '@layout/footer/footer';
import HeaderSix from '@layout/header/header-6';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import ContactSection from './contact-section';
import CollectionSection from '@components/home/collection-section';

const Index = () => {
    return (
        <main>
            <HeaderSix />
            <Breadcrumb title='Contact Us' subTitle='Contact Us' />
            <ContactSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;