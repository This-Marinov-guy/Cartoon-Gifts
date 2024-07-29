import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import BlogRightSection from './blog-right-section';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Blog Grid with Sidebar' subTitle='Blog Right Sidebar' />
            <BlogRightSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;