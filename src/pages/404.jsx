import ErrorMainArea from '@components/extra-page/error-page/error-main-area';
import Wrapper from '../layout/wrapper'
import SEO from "@components/seo";
import HeaderSix from '@layout/header/header-6';


export default function Error() {
  return (
    <Wrapper>
      <SEO pageTitle={'404 Not Found'} />
      <HeaderSix />
      <ErrorMainArea />
    </Wrapper>
  )
}