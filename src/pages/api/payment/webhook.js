import Stripe from 'stripe';
import { buffer } from 'micro';
import { createOrder } from "src/server/services/order-service";
import useTranslation from 'next-translate/useTranslation';

const { t } = useTranslation('api');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
        return;
    }

    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];

    let event = null;

    try {
        event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);
    } catch (err) {
        console.error(`${t('webhookSignatureError')}: `, err);
        return res.status(400).send(`${t('webhookError')}: ${err.message}`);
    }

    let intent = null;

    switch (event.type) {
        case 'payment_intent.succeeded':
            const metadata = event.data.object.metadata;

            try {
                const response = await createOrder(metadata);

                if (response.status) {
                    res.status(200).json({ status: true, message: `${t('orderCreated')}: ` + metadata.orderNumber });
                } else {
                    res.status(500).end({ status: false, message: response.message });
                }
            } catch (error) {
                res.status(500).end(`${t('error')}: ` + error);
            }

            break;
        case 'payment_intent.payment_failed':
            intent = event.data.object;
            const message = intent.last_payment_error && intent.last_payment_error.message;
            console.log(`${t('failed')}: `, intent.id, message);
            break;
        default:
            console.log(`${t('unknownRegisteredEvent')}: ` + event.type);
    }

    // in case we forgot to add a return response up
    res.status(200).json({ received: true, message: `${t('unknownTypeRegisteredEvent')}: ` + event.type });
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;