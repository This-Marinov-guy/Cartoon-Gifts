
import multer from 'multer';
import cloudinary from 'src/server/config/cloudinary';
import { createOrder } from 'src/server/services/order-service';
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
    const images = [];
    const name = req.body.name;

    for (let i = 0; i < req.files.length; i++) {
        const file = req.files[i];
        try {
            // if (!file.mimetype.startsWith('image/') || file.size > 5485760) {
            //     return res.status(200).json({ status: false, message: 'It looks like you have an image that is unsupported type or exceeds 5Mb - please change it and try again!' });
            // }

            const b64 = Buffer.from(file.buffer).toString('base64');
            const dataURI = `data:${file.mimetype};base64,${b64}`;
            const response = await cloudinary.uploader.upload(dataURI, {
                folder: `${name}_${orderNumber}`,
                public_id: `image_${i}`,
            });
            images.push(response.secure_url);
        } catch (error) {
            console.log(error);
        }
    }

    try {
        const response = await createOrder({ images, orderNumber, ...req.body })

        if (response.status) {
            return res.status(200).json({ status: true, orderNumber });
        } else {
            return res.status(200).json({ status: false, message: response.message });
        }
    } catch (error) {
        console.log(error);
        return res.status(200).json({ status: false, message: ERROR_COMM });
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
