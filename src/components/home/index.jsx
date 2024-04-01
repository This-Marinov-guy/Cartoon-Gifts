import React from 'react';
import HeroSection from './heroSection';
import Brand_section from './brand-section';
import About from './about'
import CollectionSection from './collection-section';
import BlogSection from './blog-section';
import PortfolioSection from './portfolio-section';
import ReviewSection from './review-section';
import ServiceSection from './service-section';
import Header from '@layout/header/header';
import Footer from '@layout/footer/footer';


const Index = () => {
    return (
        <main>
            <Header />
            <HeroSection />
            <Brand_section />
            <About />
            <ServiceSection />
            <PortfolioSection />
            <ReviewSection />
            <Footer />
        </main>
    );
};

export default Index;