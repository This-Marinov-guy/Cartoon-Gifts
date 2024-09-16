import stripe from "src/server/config/stripe";
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { uploadFiles } from "src/server/services/google-api";

const storage = multer.memoryStorage();
const upload = multer({ storage });
const myUploadMiddleware = upload.array("images");

const runMiddleware = (req, res, fn) => {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'invalidAction' });
    }

    await runMiddleware(req, res, myUploadMiddleware);

    const orderNumber = uuidv4();
    const { name, price, currency } = req.body;
    let images = [];

    try {
        images = await uploadFiles(req.files, orderNumber);
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency,
            amount: Math.ceil(price * 100),
            automatic_payment_methods: { enabled: true },
            metadata: {
                orderNumber,
                images: JSON.stringify(images),
                ...req.body
            },
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

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
