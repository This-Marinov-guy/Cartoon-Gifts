import React from "react";
import Header from "@layout/header/header";
import CollectionSection from "@components/home/collection-section";
import Footer from "@layout/footer/footer";
import DetailsSection from "./details-section";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import useTranslation from "next-translate/useTranslation";

const Index = ({ item }) => {
    const { t } = useTranslation("components");
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={t('extra-page.blog-details.index.title')} subTitle={t('extra-page.blog-details.index.subTitle')} />
        <DetailsSection item={item} />
        <CollectionSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
