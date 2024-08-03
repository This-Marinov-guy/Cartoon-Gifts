import ContacMainArea from '@components/extra-page/contact';
import SEO from '@components/seo';
import HeaderSix from '@layout/header/header-6';
import Wrapper from '@layout/wrapper';
import useTranslation from 'next-translate/useTranslation';

const Index = () => {
    const { t } = useTranslation('pages');  
  return (
    <Wrapper>
      <SEO pageTitle={t('contact-title')} />
      <HeaderSix />
      <ContacMainArea />
    </Wrapper>
  );
};

export default Index;