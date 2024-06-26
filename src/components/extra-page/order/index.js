import React from 'react';
import FaqQuestion from '../pricing/faq-question';
import HeaderSix from '@layout/header/header-6';
import Footer from '@layout/footer/footer';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import OrderForm from './order-form';

const Index = () => {
    return (
        <main>
            <HeaderSix />
            <Breadcrumb title='Make an Order' subTitle='Order' />
            <OrderForm />
            <FaqQuestion />
            <Footer />
        </main>
    );
};

export default Index;