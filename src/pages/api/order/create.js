
import multer from 'multer';
import cloudinary from 'src/server/config/cloudinary';
import { uploadFiles } from 'src/server/services/google-api';
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
        return res.status(401).json({ message: 'invalidAction' });
    }

    await runMiddleware(req, res, myUploadMiddleware);

    const orderNumber = uuidv4();
    let images = [];

    try {
        images = await uploadFiles(req.files, orderNumber);
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }

    try {
        const response = await createOrder({ images, orderNumber, ...req.body })

        if (response.status) {
            return res.status(200).json({ status: true, orderNumber });
        } else {
            return res.status(200).json({ status: false, message: response.message });
        }
    } catch (error) {
        return res.status(200).json({ status: false, message: ERROR_COMM });
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
