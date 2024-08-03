import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import dynamic from "next/dynamic";
import useTranslation from 'next-translate/useTranslation';
const TermsPrivacySection = dynamic(() => import('./terms-privacy-section'), {
  ssr: false
})

const Index = () => {
    const { t } = useTranslation('components');
    return (
        <main>
            <Header />
            <Breadcrumb title={t('extra-page.privacy-policy-area.title')} subTitle={t('extra-page.privacy-policy-area.subTitle')} />
            <TermsPrivacySection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;