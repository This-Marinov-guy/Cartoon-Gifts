import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import TeamSection from './team-section';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Our Team' subTitle='Our Team' />
            <TeamSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;