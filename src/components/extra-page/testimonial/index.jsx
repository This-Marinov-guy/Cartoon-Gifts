import CollectionSection from '@components/home/collection-section';
import Footer from '@layout/footer/footer';
import Header from '@layout/header/header';
import React from 'react';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import TestimonialSection from './testimonial-section';
import ReviewSection from '@components/home-2/review-section';

const Index = () => {
    return (
        <div>
            <Header />
            <Breadcrumb title='Testimonials' subTitle='Testimonials' />
            <TestimonialSection />
            <ReviewSection />
            <CollectionSection />
            <Footer />
        </div>
    );
};

export default Index;