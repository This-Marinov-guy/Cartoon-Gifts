import stripe from "src/server/config/stripe";

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
        return;
    }

    const sig = req.headers['stripe-signature'];
    const body = req.body;

    let event = null;

    try {
        event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        res.status(400).end('Invalid Signature');
        return;
    }

    let intent = null;

    switch (event['type']) {
        case 'payment_intent.succeeded':
            intent = event.data.object;
            console.log("Succeeded:", intent.id);
            break;
        case 'payment_intent.payment_failed':
            intent = event.data.object;
            const message = intent.last_payment_error && intent.last_payment_error.message;
            console.log('Failed:', intent.id, message);
            break;
        default:
            console.log('Unknown event registered: ' + event.type);
    }

    res.status(200).json({ received: true, message: 'Event Registered' });
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;