import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import dynamic from "next/dynamic";
import useTranslation from 'next-translate/useTranslation';
const TermsSonditionSection = dynamic(() => import('./terms-condition-section'), {
  ssr: false
})

const Index = () => {
    const { t } = useTranslation('components');
    return (
        <main>
            <Header />
            <Breadcrumb title={t('extra-page.terms-conditions-area.termsConditions')} subTitle={t('extra-page.terms-conditions-area.termsConditions')} />
            <TermsSonditionSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default Index;