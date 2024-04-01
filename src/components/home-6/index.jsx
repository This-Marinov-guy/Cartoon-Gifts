import React from 'react';
import HeroSectionSix from './hero-section-6';
import AboutSectionSix from './about-section-6';
import CounterSectionSix from './counter-section-6';
import PortfolioSectionSix from './portfolio-section-6';
import HeaderSix from '@layout/header/header-6';
import FooterSix from '@layout/footer/footer-6';
import ReviewSectionFive from '@components/home/review-section';

const Index = () => {
  return (
    <main>
      <HeaderSix />
      <HeroSectionSix />
      <AboutSectionSix />
      <CounterSectionSix />
      <PortfolioSectionSix />
      <ReviewSectionFive />
      <FooterSix />
    </main>
  );
};

export default Index;