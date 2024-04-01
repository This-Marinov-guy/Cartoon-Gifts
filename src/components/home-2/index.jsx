import React from 'react';
import HeroSection2 from './hero-section-2';
import ReviewSection from './review-section';
import FunfactSection from './funfact-section';
import AboutTwo from './about-2';
import BlogSectionTwo from './blog-section-2';
import ServiceSectionTwo from './service-section-2';
import FooterTwo from '@layout/footer/footer-2';
import HeaderTwo from '@layout/header/header-2';
import dynamic from "next/dynamic";
const PortfolioSection = dynamic(() => import('./portfolio-section-2'), {
  ssr: false
})

const Index = () => {
    return (
        <main>
            <HeaderTwo />
            <HeroSection2 />
            <ServiceSectionTwo />
            <PortfolioSection />
            <ReviewSection />
            <FunfactSection />
            <AboutTwo />
            <BlogSectionTwo />
            <FooterTwo />
        </main>
    );
};

export default Index;