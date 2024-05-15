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

const Order = () => {
    const { checkoutStore } = useStore();
    const { checkout } = checkoutStore;

    useEffect(() => {
        checkout.resetData();
    }, [])

    return (
        <Wrapper>
            <SEO pageTitle={'Order Success'} />
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
                    Successful Order!
                </AlertTitle>
                <AlertDescription >
                    Thank you for ordering from Cartoon Gifts! Your order is on its way to us - you will receive a confirmation email with the order details.
                    <br />
                    If you have problems or want to contact us please email us at: <a style={{ color: '#1e0a91' }} href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </AlertDescription>
            </Alert>
            <Footer />
        </Wrapper>
    );
};

export default Order;