import SEO from '@components/seo';
import ServiceDetailsArea from '@components/extra-page/service-details';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import services_data from '@data/common_data/service-data';
import Wrapper from '@layout/wrapper';

const ServicesDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [service, setService] = useState({});


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)

    else (setService(services_data.find(item => item.id == id)))

    return () => {};
  }, [id]);

  return (
    <Wrapper>
      <SEO pageTitle={'Service Details'} />
      <ServiceDetailsArea item={service} />
    </Wrapper>
  );
};

export default ServicesDetails;