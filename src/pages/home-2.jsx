import Wrapper from '../layout/wrapper'
import SEO from "@components/seo";
import HomeTwoMain from "@components/home-2"


export default function HomeTwo() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Two'} />
      <HomeTwoMain />
    </Wrapper>
  )
}