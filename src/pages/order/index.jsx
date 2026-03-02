import React, { useEffect } from 'react';
import SEO from '@components/seo';
import StructuredData from '@components/structured-data';
import OrderMain from '@components/extra-page/order';
import Wrapper from '@layout/wrapper';
import HeaderSix from '@layout/header/header-6';
import { useToast } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { ACTIVE_DISCOUNT } from '@utils/defines';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://cartoongifts.eu';

const Order = () => {
  const toast = useToast();
  const { t, lang } = useTranslation('pages');
  const router = useRouter();

  useEffect(() => {
    if (ACTIVE_DISCOUNT) toast({
      title: t('order-offer.toastTitle'),
      description: t('order-offer.toastDescription'),
      status: 'info',
      isClosable: true,
      duration: null,
      icon: <i className="fa-solid fa-percent"></i>
    });
  }, []);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: t('order-title'), url: '/order' },
  ];

  return (
    <Wrapper>
      <SEO
        pageTitle={t('order-title')}
        description={t('order-description')}
        keywords={t('order-keywords')}
        ogType="product"
        ogImage={`${BASE_URL}/assets/images/logo/logo-title.png`}
      />
      <StructuredData
        type={['product', 'service', 'breadcrumb', 'webpage']}
        data={{
          lang,
          url: `${BASE_URL}${router.asPath}`,
          name: t('order-title'),
          description: t('order-description'),
          breadcrumbs,
        }}
      />
      <HeaderSix />
      <OrderMain />
    </Wrapper>
  );
};

export default Order;
