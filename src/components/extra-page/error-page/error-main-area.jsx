import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import React from 'react';
import ErrorSection from './error-section';

const ErrorMainArea = () => {
    return (
        <main>
            <ErrorSection />
            <CollectionSection />
            <Footer />
        </main>
    );
};

export default ErrorMainArea;