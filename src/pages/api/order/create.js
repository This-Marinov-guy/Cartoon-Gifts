
import { BASIC_PRICE, DELIVERY_ITEMS, ERROR_MESSAGE, PET_IMAGE_PRICE, SIZE_ITEMS } from '@utils/defines';
import moment from 'moment';
import multer from 'multer';
import cloudinary from 'src/server/config/cloudinary';
import connectDB from 'src/server/middleware/mongodb';
import Order from 'src/server/models/Order';
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

const validatePrice = (inputs, files) => {
    const { size, delivery, price } = inputs
    const images = Object.values(files);

    const calcPrice = BASIC_PRICE + SIZE_ITEMS.find(item => item.property === size).price + DELIVERY_ITEMS.find(item => item.property === delivery).price + images.length * PET_IMAGE_PRICE

    if (price - calcPrice < 20) {
        return false
    }

    return true;
}

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(401).json({ message: 'Invalid action' });
    }

    await runMiddleware(req, res, myUploadMiddleware);

    const orderNumber = uuidv4();
    const images = [];
    const { name, email, occasion, profession, hobby, label, hasPet, description, size, delivery, price } = req.body;

    // if (!validatePrice({ size, delivery, price }, req.files)) {
    //     return res.status(200).json({ status: false, message: ERROR_MESSAGE })
    // }

    for (let i = 0; i < req.files.length; i++) {
        const file = req.files[i];
        try {
            if (!file.type.startsWith('image/') || file.size > 5485760) {
                return res.status(200).json({ status: false, message: 'It looks like you have an image that is unsupported type or exceeds 5Mb - please change it and try again!' });
            }

            const b64 = Buffer.from(file.buffer).toString("base64");
            let dataURI = "data:" + file.mimetype + ";base64," + b64;
            const response = await cloudinary.uploader.upload(dataURI, {
                folder: name + '_' + occasion + '_' + orderNumber,
                public_id: `${i + 1}`,
            });
            images.push(response.secure_url);
        } catch (error) { }
    }

    const order = new Order({
        orderNumber, name, email, occasion, profession, hobby, label, hasPet, description, size, delivery, price, images
    })

    try {
        await order.save()
    } catch (err) {
        console.log(err);
        return res.status(200).json({ status: false, message: ERROR_MESSAGE });
    }

    return res.status(200).json({ status: true, orderNumber });
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default connectDB(handler);
