import stripe from "src/server/config/stripe";

const handler = async (req, res) => {
    const { amount, metadata } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: "EUR",
            amount: amount * 100,
            automatic_payment_methods: { enabled: true },
            metadata,
        });

        res.status(200).json({
            status: true, clientSecret: paymentIntent.client_secret,
        });
    } catch (e) {
        return res.status(400).send({
            error: {
                status: false, message: e.message,
            },
        });
    }
}

export default handler;