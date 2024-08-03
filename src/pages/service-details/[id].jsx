import SEO from '@components/seo';
import ServiceDetailsArea from '@components/extra-page/service-details';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import services_data from '@data/common_data/service-data';
import Wrapper from '@layout/wrapper';
import useTranslation from 'next-translate/useTranslation';

const ServicesDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const { t } = useTranslation('pages');
  const [service, setService] = useState({});


  useEffect(() => {
    if (!id) (<h1>{t('service-details.loading')}...</h1>)

    else (setService(services_data.find(item => item.id == id)))

    return () => {};
  }, [id]);

  return (
    <Wrapper>
      <SEO pageTitle={t('service-details.title')} />
      <ServiceDetailsArea item={service} />
    </Wrapper>
  );
};

export default ServicesDetails;