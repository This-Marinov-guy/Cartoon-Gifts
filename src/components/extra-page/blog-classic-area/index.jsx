import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import BlogSection from './blog-section';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Blog classic' subTitle='Blog classic' />
            <BlogSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;