import Wrapper from '../layout/wrapper'
import SEO from "@components/seo";
import HomeThereMain from "@components/home-3"


export default function HomeThree() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home There'} />
      <HomeThereMain />
    </Wrapper>
  )
}