import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import BlogLeftSection from './blog-left-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import useTranslation from 'next-translate/useTranslation';


const Index = () => {
    const { t } = useTranslation('components');
    return (
        <main>
            <Header />
            <Breadcrumb title={t('extra-page.blog-left-sidebar.index.blogGridWithSidebar')} subTitle={t('extra-page.blog-left-sidebar.index.blogLeftSidebar')} />
            <BlogLeftSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;