import TeamAreaMain from '@components/extra-page/team-area';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Team'} />
      <TeamAreaMain />
    </Wrapper>
  );
};

export default Index;