import React from "react";
import DetailsSection from "./details-section";
import CollectionSection from "@components/home/collection-section";
import Header from "@layout/header/header";
import Footer from "@layout/footer/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";

const Index = ({ item }) => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Portfolio Details" subTitle="Portfolio Details" />
        <DetailsSection item={item} />
        <CollectionSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
