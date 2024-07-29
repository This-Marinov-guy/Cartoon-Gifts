import SEO from "@components/seo";
import HomeMain from "@components/home-6"
import Wrapper from "../layout/wrapper";
import HeaderSix from "@layout/header/header-6";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={'Welcome'} />
      <HeaderSix />
      <HomeMain />
    </Wrapper>
  )
}
