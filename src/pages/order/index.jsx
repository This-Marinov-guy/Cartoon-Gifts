import React, {useEffect} from 'react';
import SEO from '@components/seo';
import OrderMain from '@components/extra-page/order';
import Wrapper from '@layout/wrapper';
import HeaderSix from '@layout/header/header-6';
import { useToast } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

const Order = () => {
  const toast = useToast();
    const { t } = useTranslation('pages');

  useEffect(() => {
    toast({
      title: t('order.orderPageToastTitle'),
      description: t('order.orderPageToastDescription'),
      status: 'info',
      isClosable: true,
      duration: null,
      icon: <i class="fa-solid fa-percent"></i>
    })
  }, [])

  return (
    <Wrapper>
      <SEO pageTitle={t('order.orderPageTitle')} />
      <HeaderSix />
      <OrderMain />
    </Wrapper>
  );
};

export default Order;