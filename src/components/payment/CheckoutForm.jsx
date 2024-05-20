import React from "react";
import { useState } from "react";
import { useToast } from '@chakra-ui/react';
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import SkeletonOne from "@components/common/loading/SkeletonOne";
import { ModalFooter, } from '@chakra-ui/react'
import { useStore } from "src/stores/storeContext";

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const toast = useToast();

    const { currencyStore } = useStore();

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
                return_url: props.paymentProperties.successUrl,
                receipt_email: props.paymentProperties.email,
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
                title: "An unexpected error occured.",
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
                <h5>Total: {props.paymentProperties * currencyStore.currency.multiplier} {currencyStore.currency.symbol}</h5>
                <button type="button" onClick={props.onClose} className="bd-btn-link btn_dark" style={{ marginRight: '10px' }} >
                    Back
                </button>
                <button disabled={isProcessing || !stripe || !elements} id="submit" className="bd-btn-link mt-20"
                >
                    <span id="button-text">
                        {isProcessing ? "Processing ... " : "Pay now"}
                    </span>
                </button>
            </div>
        </form>
    );
}

export default CheckoutForm