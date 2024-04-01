import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import ContactSection from './contact-section';
import ContactFromSection from './contact-from-section';
import CantactFaq from './cantact-faq';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const Index = () => {
    return (
        <div>
            <Header />
            <Breadcrumb title='Contact Us V2' subTitle='Contact Us V2' />
            <ContactSection />
            <ContactFromSection />
            <CantactFaq />
            <CollectionSection />
            <Footer />
        </div>
    );
};

export default Index;