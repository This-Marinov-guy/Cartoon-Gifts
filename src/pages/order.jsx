import React from 'react';
import SEO from '@components/seo';
import OrderMain from '@components/extra-page/order';
import Wrapper from '@layout/wrapper';

const Order = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Order'} />
      <OrderMain />
    </Wrapper>
  );
};

export default Order;