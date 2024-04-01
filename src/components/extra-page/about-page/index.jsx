import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import DetailsAboutSection from './about-section';
import AboutSectionTwo from './about-section-2';
import HistorySection from './history-section';
import TeamSection from '@components/home-3/team-section';
import StarterStepsSection from '@components/home-6/starter-steps-section';
import CollectionSection from '@components/home/collection-section';
import CounterSection from './counter-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title="About Us" subTitle="About Us" />
            <DetailsAboutSection />
            <CounterSection />
            <AboutSectionTwo />
            <HistorySection />
            <StarterStepsSection />
            <TeamSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;