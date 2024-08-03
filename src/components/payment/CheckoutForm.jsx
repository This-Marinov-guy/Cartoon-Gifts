import React from "react";
import { useState } from "react";
import { useToast } from '@chakra-ui/react';
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import SkeletonOne from "@components/common/loading/SkeletonOne";
import { ModalFooter, } from '@chakra-ui/react'
import { useStore } from "src/stores/storeContext";
import useTranslation from "next-translate/useTranslation";

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const toast = useToast();
    const { t } = useTranslation('components');

    const payment = props.paymentProperties;

    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return <SkeletonOne />;
        }

        setIsProcessing(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: payment.successUrl,
                receipt_email: payment.email,
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            toast({
                title: error.message,
                status: 'error',
                duration: 15000,
                isClosable: true,
            })

        } else {
            toast({
                title: t('payment.unexpectedError'),
                status: 'error',
                duration: 15000,
                isClosable: true,
            })
        }

        setIsProcessing(false);
    };

    return (
        <form className="payment_form" id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" />
            {/* Show any error or success messages */}
            <div className='mt-15'>
                <h5>{t('payment.total')}: {payment.amount * payment.currency.multiplier} {payment.currency.symbol}</h5>
                <button type="button" onClick={props.onClose} className="bd-btn-link btn_dark" style={{ marginRight: '10px' }} >
                    {t('payment.back')}
                </button>
                <button disabled={isProcessing || !stripe || !elements} id="submit" className="bd-btn-link mt-20"
                >
                    <span id="button-text">
                        {isProcessing ? t('payment.processing') : t('payment.payNow')}
                    </span>
                </button>
            </div>
        </form>
    );
}

export default CheckoutForm