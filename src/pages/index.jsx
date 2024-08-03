import SEO from "@components/seo";
import HomeMain from "@components/home-6"
import Wrapper from "../layout/wrapper";
import HeaderSix from "@layout/header/header-6";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
    const { t } = useTranslation('pages');
  return (
    <Wrapper>
      <SEO pageTitle={t('index-title')} />
      <HeaderSix />
      <HomeMain />
    </Wrapper>
  )
}
