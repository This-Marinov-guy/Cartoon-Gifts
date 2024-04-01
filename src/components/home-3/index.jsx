
import React from 'react';
import AboutThere from './about-3';
import TeamSection from './team-section';
import AboutSection from './about-section';
import BlogSection from './blog-section';
import FooterThire from '../../layout/footer/footer-3';
import ServiceSectionThere from './service-section-3';
import ReviewSectionThire from './review-section-3';
import BanerSectionThire from './baner-section-3';
import BrandSectionThire from './brand-section-3';
import PortfolioSectionThire from './portfolio-section-3';
import HeaderThire from '@layout/header/header-3';

const Index = () => {
    return (
        <main>
            <HeaderThire />
            <BanerSectionThire />
            <BrandSectionThire />
            <ServiceSectionThere />
            <AboutThere />
            <PortfolioSectionThire />
            <TeamSection />
            <AboutSection />
            <ReviewSectionThire />
            <BlogSection />
            <FooterThire />
        </main>
    );
};

export default Index;