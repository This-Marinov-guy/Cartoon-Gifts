import SEO from "@components/seo";
import HomeMain from "@components/home-6"
import Wrapper from "../layout/wrapper";


export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle={'Welcome'} />
      <HomeMain />
    </Wrapper>
  )
}
