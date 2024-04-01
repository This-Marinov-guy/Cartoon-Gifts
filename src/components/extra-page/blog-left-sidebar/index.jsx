import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import BlogLeftSection from './blog-left-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';


const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Blog Grid with Sidebar' subTitle='Blog Left Sidebar' />
            <BlogLeftSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;