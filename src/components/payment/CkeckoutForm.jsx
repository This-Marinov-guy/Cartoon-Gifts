import React from "react";
import { useState } from "react";
import { PaymentElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import { Skeleton, Stack } from '@chakra-ui/react'

const CheckoutForm = ({ stripePromise, clientSecret }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
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
        <Elements stripe={stripePromise} options={{ clientSecret }} >
            <form className="payment_form" id="payment-form" onSubmit={handleSubmit}>
                <PaymentElement id="payment-element" />
                <button disabled={isProcessing || !stripe || !elements} id="submit" className="rn-button-style--2 btn-solid mt--40"
                >
                    <span id="button-text">
                        {isProcessing ? "Processing ... " : "Pay now"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
        </Elements>
    );
}

export default CheckoutForm