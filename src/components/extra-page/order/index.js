import React from 'react';
import PricingSection from '../pricing/pricing-section';
import FaqQuestion from '../pricing/faq-question';
import Header from '@layout/header/header';
import Footer from '@layout/footer/footer';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import OrderForm from './order-form';

const Index = () => {
    return (
        <main>
            <Header />
            <Breadcrumb title='Make an Order' subTitle='Order' />
            <PricingSection />
            <OrderForm />
            <FaqQuestion />
            <Footer />
        </main>
    );
};

export default Index;