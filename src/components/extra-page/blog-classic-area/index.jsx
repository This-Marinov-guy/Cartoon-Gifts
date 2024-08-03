import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import BlogSection from './blog-section';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('components');
    return (
        <main>
            <Header />
            <Breadcrumb title={t('extra-page.blog-classic-area.index.blogClassicTitle')} subTitle={t('extra-page.blog-classic-area.index.blogClassicSubTitle')} />
            <BlogSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;