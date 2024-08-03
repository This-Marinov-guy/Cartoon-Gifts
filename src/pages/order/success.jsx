import React, {useEffect} from 'react';
import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import HeaderSix from '@layout/header/header-6';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import Footer from '@layout/footer/footer';
import { EMAIL } from '@utils/defines';
import { useStore } from 'src/stores/storeContext';
import useTranslation from 'next-translate/useTranslation';

const Order = () => {
    const { checkoutStore } = useStore();
    const { t } = useTranslation('pages');

    useEffect(() => {
        checkoutStore.resetData();
    }, [])

    return (
        <Wrapper>
            <SEO pageTitle={t('order.orderSuccessPageTitle')} />
            <HeaderSix />
            <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                className='page-alert'
            >
                <AlertIcon boxSize='80px' mr={0} />
                <AlertTitle style={{ marginTop: '20px' }} mt={4} mb={1} fontSize='lg'>
                    {t('order.orderSuccessPageAlertTitle')}
                </AlertTitle>
                <AlertDescription >
                    {t('order.orderSuccessPageAlertDescription1')}
                    <br />
                    {t('order.orderSuccessPageAlertDescription2')} <a style={{ color: '#1e0a91' }} href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </AlertDescription>
            </Alert>
            <Footer />
        </Wrapper>
    );
};

export default Order;