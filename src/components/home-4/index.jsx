import React from 'react';
import ClientLogoSection from './client-logo-section';
import AboutSectionFour from './about-section-4';
import ActionSection from './action-section';
import BlogSectionFour from './blog-section-4';
import ReviewSectionFour from './review-section-4';
import HeroSectionFour from './hero-section-4';
import HeaderFour from '@layout/header/header-4';
import FooterFour from '@layout/footer/footer-4';
import ServiceSectionFour from './service-section-4';
import dynamic from "next/dynamic";
const PortfolioSectionFour = dynamic(() => import('./portfolio-section'), {
  ssr: false
})

const Index = () => {
    return (
      <>
        <HeaderFour />
        <main>
          <HeroSectionFour />
          <ClientLogoSection />
          <ServiceSectionFour />
          <AboutSectionFour />
          <PortfolioSectionFour />
          <ReviewSectionFour />
          <ActionSection />
          <BlogSectionFour />
        </main>
        <FooterFour />
      </>
    );
};

export default Index;