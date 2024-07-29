import ContacMainArea from '@components/extra-page/contact';
import SEO from '@components/seo';
import HeaderSix from '@layout/header/header-6';
import Wrapper from '@layout/wrapper';

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Contact'} />
      <HeaderSix />
      <ContacMainArea />
    </Wrapper>
  );
};

export default Index;