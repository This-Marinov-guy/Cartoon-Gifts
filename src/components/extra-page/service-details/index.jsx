import React from "react";
import DetailsSection from "./details-section";
import ReviewSection from "./review-section";
import FaqSection from "./faq-section";
import ServiceSection from "@components/home/service-section";
import CollectionSection from "@components/home/collection-section";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import Header from "@layout/header/header";
import Footer from "@layout/footer/footer";
import useTranslation from "next-translate/useTranslation";

const Index = ({ item }) => {
    const { t } = useTranslation("components");
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={t('extra-page.service-details.index.title')} subTitle={t('extra-page.service-details.index.subTitle')} />
        <DetailsSection item={item} />
        <ReviewSection />
        <FaqSection />
        <ServiceSection serviceBgg="service_section section_space_lg bg_light" />
        <CollectionSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
