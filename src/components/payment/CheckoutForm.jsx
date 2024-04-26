import React from "react";
import { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Skeleton, Stack } from '@chakra-ui/react'

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return <Stack>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
            </Stack>;
        }

        setIsProcessing(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                redirect: "if_required",
                return_url: `${window.location.origin}/payment-success`,
                receipt_email: 'vlady1002@abv.bg',
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occured.");
        }

        setIsProcessing(false);
    };

    return (
        <form className="payment_form" id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" />
            <button type="button" className="bd-btn-link btn_dark" style={{ marginRight: '10px' }} >
                Back
            </button>
            <button disabled={isProcessing || !stripe || !elements} id="submit" className="bd-btn-link mt-20"
            >
                <span id="button-text">
                    {isProcessing ? "Processing ... " : "Pay now"}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    );
}

export default CheckoutForm