import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const PaymentElement = (props) => {
    return (
        <Elements
            stripe={loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)}
            options={{ clientSecret: props.clientSecret }}>
            <CheckoutForm {...props} />
        </Elements>
    );
}

export default PaymentElement