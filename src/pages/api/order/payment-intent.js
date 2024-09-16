import stripe from "src/server/config/stripe";

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'invalidAction' });
    }

    const {images, ...rest} = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency,
            amount: Math.ceil(price * 100),
            automatic_payment_methods: { enabled: true },
            metadata: {
                ...rest,
                images: JSON.stringify(images),
            },
        });

        return res.status(200).json({
            status: true, clientSecret: paymentIntent.client_secret,
        });
    } catch (e) {
        return res.status(400).json({
            error: {
                status: false, message: e.message,
            },
        });
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
