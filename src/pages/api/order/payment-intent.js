import stripe from "src/server/config/stripe";
import multer from 'multer';
import cloudinary from 'src/server/config/cloudinary';
import { v4 as uuidv4 } from 'uuid';

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
        return res.status(401).json({ message: 'Invalid action' });
    }

    await runMiddleware(req, res, myUploadMiddleware);

    const orderNumber = uuidv4();
    const { name, price, currency } = req.body;
    const images = [];

    for (let i = 0; i < req.files.length; i++) {
        const file = req.files[i];
        try {
            if (!file.mimetype.startsWith('image/') || file.size > 5485760) {
                return res.status(200).json({ status: false, message: 'It looks like you have an image that is unsupported type or exceeds 5Mb - please change it and try again!' });
            }

            const b64 = Buffer.from(file.buffer).toString('base64');
            const dataURI = `data:${file.mimetype};base64,${b64}`;
            const response = await cloudinary.uploader.upload(dataURI, {
                folder: `${name}_${orderNumber}`,
                public_id: `image_${i}`,
            });
            images.push(response.secure_url);
        } catch (error) {
            console.log(error);
            return res.status(200).json({ status: false, message: 'It looks like you have an image that is unsupported type or exceeds 5Mb - please change it and try again!' });
        }
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency,
            amount: price * 100,
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