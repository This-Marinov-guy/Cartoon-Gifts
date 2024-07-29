import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import dynamic from "next/dynamic";
const TermsPrivacySection = dynamic(() => import('./terms-privacy-section'), {
  ssr: false
})

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title=' Privacy & Policy ' subTitle='Privacy & Policy' />
            <TermsPrivacySection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;