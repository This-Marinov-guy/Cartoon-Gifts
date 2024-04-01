import React from 'react';
import HeroSectionSix from './hero-section-6';
import ServiceSectionSix from './service-section-6';
import BrandSectionSix from './brand-section-6';
import AboutSectionSix from './about-section-6';
import CounterSectionSix from './counter-section-6';
import PortfolioSectionSix from './portfolio-section-6';
import StarterStepsSection from './starter-steps-section';
import TeamSectionSix from './team-section-6';
import BlogSectionSix from './blog-section-6';
import HeaderSix from '@layout/header/header-6';
import FooterSix from '@layout/footer/footer-6';
import ReviewSectionFive from '@components/home-5/review-section-5';

const Index = () => {
  return (
    <main>
      <HeaderSix />
      <HeroSectionSix />
      <ServiceSectionSix />
      <BrandSectionSix />
      <AboutSectionSix />
      <CounterSectionSix />
      <PortfolioSectionSix />
      <StarterStepsSection />
      <TeamSectionSix />
      <ReviewSectionFive />
      <BlogSectionSix />
      <FooterSix />
    </main>
  );
};

export default Index;