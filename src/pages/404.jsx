import ErrorMainArea from '@components/extra-page/error-page/error-main-area';
import Wrapper from '../layout/wrapper'
import SEO from "@components/seo";
import HeaderSix from '@layout/header/header-6';
import useTranslation from 'next-translate/useTranslation';


export default function Error() {
    const { t } = useTranslation('error');
    return (
        <Wrapper>
            <SEO pageTitle={t('pageTitle')} />
            <HeaderSix />
            <ErrorMainArea />
        </Wrapper>
    )
}