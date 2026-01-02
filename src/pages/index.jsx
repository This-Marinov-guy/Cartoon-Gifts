import SEO from "@components/seo";
import StructuredData from "@components/structured-data";
import HomeMain from "@components/home-6"
import Wrapper from "../layout/wrapper";
import HeaderSix from "@layout/header/header-6";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
    const { t } = useTranslation('pages');
    
  return (
    <Wrapper>
      <SEO 
        pageTitle={t('index-title')}
        description={t('index-description')}
        keywords="cartoon gifts, personalized cartoons, custom cartoon portraits, cartoon illustrations, personalized gifts"
        ogType="website"
      />
      <StructuredData type={["organization", "website"]} />
      <HeaderSix />
      <HomeMain />
    </Wrapper>
  )
}
