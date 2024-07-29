import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import BlogSection from './blog-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title="Blog Grid" subTitle="Blog Grid" />
            <BlogSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;