import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import FaqSection from '@components/extra-page/service-details/faq-section';
import CommonQuetion from './common-quetion';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('components');
    return (
        <main>
            <Header />
            <Breadcrumb title={t('extra-page.fq-question.index.title')} subTitle={t('extra-page.fq-question.index.subTitle')} />
            <FaqSection />
            <CommonQuetion />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;