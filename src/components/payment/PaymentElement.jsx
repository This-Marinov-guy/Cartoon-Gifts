import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const PaymentElement = ({ clientSecret }) => {
    return (
        <Elements
            stripe={loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)}
            options={{ clientSecret }}>
            <CheckoutForm />
        </Elements>
    );
}

export default PaymentElement