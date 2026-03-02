import SEO from "@components/seo";
import StructuredData from "@components/structured-data";
import HomeMain from "@components/home-6";
import Wrapper from "../layout/wrapper";
import HeaderSix from "@layout/header/header-6";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://cartoongifts.eu";

export default function Home() {
    const { t, lang } = useTranslation("pages");
    const router = useRouter();

    return (
        <Wrapper>
            <SEO
                pageTitle={t("index-title")}
                description={t("index-description")}
                keywords={t("index-keywords")}
                ogType="website"
                ogImage={`${BASE_URL}/assets/images/logo/logo-title.png`}
            />
            <StructuredData
                type={["organization", "localBusiness", "website", "faq"]}
                data={{
                    lang,
                    url: `${BASE_URL}${router.asPath}`,
                }}
            />
            <HeaderSix />
            <HomeMain />
        </Wrapper>
    );
}
