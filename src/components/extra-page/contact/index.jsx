import Footer from '@layout/footer/footer';
import HeaderSix from '@layout/header/header-6';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import ContactSection from './contact-section';
import CollectionSection from '@components/home/collection-section';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('components');
    return (
        <main>
            <HeaderSix />
            <Breadcrumb title={t('extra-page.contact-section.contactUs')} subTitle={t('extra-page.contact-section.contactUs')} />
            <ContactSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;