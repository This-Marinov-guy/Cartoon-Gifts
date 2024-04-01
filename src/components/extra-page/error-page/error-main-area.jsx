import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import ErrorSection from './error-section';

const ErrorMainArea = () => {
    return (
        <main>
            <Header />
            <ErrorSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default ErrorMainArea;