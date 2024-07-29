import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import AboutMeSection from './about-me-section';
import ExperienceSection from './experience-section';
import ContactSection from './contact-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';


const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title="About Me" subTitle="About Me" />
            <AboutMeSection />
            <ExperienceSection />
            <ContactSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;