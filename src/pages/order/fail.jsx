import React from 'react';
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
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const Order = () => {
    const { t } = useTranslation('pages');
    return (
        <Wrapper>
            <SEO pageTitle={t('order.orderFailurePageTitle')} />
            <HeaderSix />
            <Alert
                status='error'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                className='page-alert'
            >
                <AlertIcon boxSize='80px' mr={0} />
                <AlertTitle style={{ marginTop: '20px' }} mt={4} mb={1} fontSize='lg'>
                    {t('order.orderFailurePageAlertTitle')}
                </AlertTitle>
                <AlertDescription >
                    {t('order.orderFailurePageAlertDescription')}
                    <br />
                    <a style={{ color: '#1e0a91' }} href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    <br />
                    <Link href='/order' className="bd-btn-link btn_dark" style={{ marginTop: '20px' }} >
                        {t('order.backToOrderPage')}
                    </Link>
                </AlertDescription>
            </Alert>
            <Footer />
        </Wrapper>
    );
};

export default Order;