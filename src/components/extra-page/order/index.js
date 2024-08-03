import React from 'react';
import FaqQuestion from '../pricing/faq-question';
import HeaderSix from '@layout/header/header-6';
import Footer from '@layout/footer/footer';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import OrderForm from './order-form';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('components');
    return (
        <main>
            <HeaderSix />
            <Breadcrumb title={(t('extra-page.order.index.title'))} subTitle={(t('extra-page.order.index.subTitle'))} />
            <OrderForm />
            <FaqQuestion />
            <Footer />
        </main>
    );
};

export default Index;