import HeaderFive from "@layout/header/header-5";
import AboutSectionFive from "./about-section-5";
import BlogSectionFive from "./blog-section-5";
import BrandSectionFive from "./brand-section-5";
import HeroSectionFive from "./hero-section-5";
import PolicySection from "./policy-section";
import PortfolioSectionFive from "./portfolio-section-5";
import ReviewSectionFive from "./review-section-5";
import ServiceSectionFive from "./service-section-5";
import TeamSectionFive from "./team-section-5";
import ValueSection from "./value-section";
import FooterFive from "@layout/footer/footer-5";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeaderFive />
      <HeroSectionFive />
      <PolicySection />
      <AboutSectionFive />
      <ServiceSectionFive />
      <ValueSection />
      <BrandSectionFive />
      <PortfolioSectionFive />
      <TeamSectionFive />
      <ReviewSectionFive />
      <BlogSectionFive />
      <FooterFive />
    </main>
  );
};

export default Index;
