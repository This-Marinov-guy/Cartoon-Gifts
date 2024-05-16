import Stripe from 'stripe';
import { createOrder } from "src/server/services/order-service";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
        return;
    }

    const sig = req.headers['stripe-signature'];

    let event = null;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.error('Error verifying webhook signature:', err);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    let intent = null;

    switch (event.type) {
        case 'payment_intent.succeeded':
            const metadata = event.data.object.metadata;

            try {
                const response = await createOrder(metadata);

                if (response.status) {
                    res.status(200).json({ status: true, message: 'Order created: ' + metadata.orderNumber });
                } else {
                    res.status(500).end({ status: false, message: response.message });
                }
            } catch (error) {
                res.status(500).end('Error: ' + error);
            }

            break;
        case 'payment_intent.payment_failed':
            intent = event.data.object;
            const message = intent.last_payment_error && intent.last_payment_error.message;
            console.log('Failed:', intent.id, message);
            break;
        default:
            console.log('Unknown event registered: ' + event.type);
    }

    // in case we forgot to add a return response up
    res.status(200).json({ received: true, message: 'Event Registered with unknown type: ' + event.type });
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;