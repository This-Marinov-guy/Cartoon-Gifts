import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import AboutMeSection from './about-me-section';
import ExperienceSection from './experience-section';
import ContactSection from './contact-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import useTranslation from 'next-translate/useTranslation';


const Index = () => {
    const { t } = useTranslation('components');
    return (
        <main>
            <Header />
            <Breadcrumb title={t('extra-page.about-two-area.index.title')} subTitle={t('extra-page.about-two-area.index.subTitle')} />
            <AboutMeSection />
            <ExperienceSection />
            <ContactSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;