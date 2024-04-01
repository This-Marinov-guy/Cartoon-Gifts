import SEO from "@components/seo";
import Wrapper from '../layout/wrapper'
import HomeSixMain from "@components/home";

export default function HomeSix(){
    return(
        <Wrapper>
            <SEO pageTitle={'Cartoon Gifts'}></SEO>
            <HomeSixMain/>
        </Wrapper>
    )
}