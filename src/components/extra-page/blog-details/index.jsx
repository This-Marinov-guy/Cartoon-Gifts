import React from "react";
import Header from "@layout/header/header";
import CollectionSection from "@components/home/collection-section";
import Footer from "@layout/footer/footer";
import DetailsSection from "./details-section";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";

const Index = ({ item }) => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Blog Details" subTitle="Blog Details" />
        <DetailsSection item={item} />
        <CollectionSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
