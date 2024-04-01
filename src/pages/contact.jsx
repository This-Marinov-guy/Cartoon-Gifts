import ContacMainArea from '@components/extra-page/contact';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Contact'} />
      <ContacMainArea />
    </Wrapper>
  );
};

export default Index;