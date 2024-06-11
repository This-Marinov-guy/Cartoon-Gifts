import React, {useEffect} from 'react';
import SEO from '@components/seo';
import OrderMain from '@components/extra-page/order';
import Wrapper from '@layout/wrapper';
import HeaderSix from '@layout/header/header-6';
import { useToast } from '@chakra-ui/react';

const Order = () => {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: 'Summer sale - 15% off',
      description: 'Enjoy our summer sale with a discount from us. It will be automatically applied on checkout!',
      status: 'info',
      isClosable: true,
      duration: null,
      icon: <i class="fa-solid fa-percent"></i>
    })
  }, [])

  return (
    <Wrapper>
      <SEO pageTitle={'Order'} />
      <HeaderSix />
      <OrderMain />
    </Wrapper>
  );
};

export default Order;