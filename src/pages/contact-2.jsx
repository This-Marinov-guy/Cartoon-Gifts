import ContactTwoArea from '@components/extra-page/contact-two-area';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Contact Two'} />
      <ContactTwoArea />
    </Wrapper>
  );
};

export default Index;