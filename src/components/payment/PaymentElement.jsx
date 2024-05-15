import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const PaymentElement = ({ clientSecret, onClose, paymentProperties }) => {
    return (
        <Elements
            stripe={loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)}
            options={{ clientSecret }}>
            <CheckoutForm onClose={onClose} paymentProperties={paymentProperties} />
        </Elements>
    );
}

export default PaymentElement