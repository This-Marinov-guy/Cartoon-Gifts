import React from "react";
import DetailsSection from "./details-section";
import CollectionSection from "@components/home/collection-section";
import Header from "@layout/header/header";
import Footer from "@layout/footer/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import useTranslation from "next-translate/useTranslation";

const Index = ({ item }) => {
    const { t } = useTranslation('components');
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={t('extra-page.portfolio-details.index.title')} subTitle={t('extra-page.portfolio-details.index.subTitle')} />
        <DetailsSection item={item} />
        <CollectionSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
