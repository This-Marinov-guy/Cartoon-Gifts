import React from 'react';
import SEO from '@components/seo';
import OrderMain from '@components/extra-page/order';
import Wrapper from '@layout/wrapper';
import HeaderSix from '@layout/header/header-6';

const Order = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Order'} />
      <HeaderSix />
      <OrderMain />
    </Wrapper>
  );
};

export default Order;