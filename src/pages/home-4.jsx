import Wrapper from '../layout/wrapper'
import SEO from "@components/seo";
import HomeFourMain from "@components/home-4"


export default function HomeFour() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Four'} />
      <HomeFourMain />
    </Wrapper>
  )
}