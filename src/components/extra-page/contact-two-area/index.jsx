import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import ContactSection from './contact-section';
import ContactFromSection from './contact-from-section';
import CantactFaq from './contact-faq';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('components');
    return (
        <div>
            <Header />
            <Breadcrumb title={t('extra-page.contact-two-area.index.title')} subTitle={t('extra-page.contact-two-area.index.subTitle')} />
            <ContactSection />
            <ContactFromSection />
            <CantactFaq />
            <CollectionSection />
            <Footer />
        </div>
    );
};

export default Index;