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

const Order = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Order Success'} />
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
                    It looks like something did not go as planned!
                </AlertTitle>
                <AlertDescription >
                    Your payment might have failed or you have canceled your order - if this is not the case, please contact us!
                    <br />
                    <a style={{ color: '#1e0a91' }} href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    <br />
                    <Link href='/order' className="bd-btn-link btn_dark" style={{ marginTop: '20px' }} >
                        Back to order
                    </Link>
                </AlertDescription>
            </Alert>
            <Footer />
        </Wrapper>
    );
};

export default Order;