
import { BASIC_PRICE, DELIVERY_ITEMS, ERROR_COMM, ERROR_MESSAGE, PET_IMAGE_PRICE, SIZE_ITEMS } from '@utils/defines';
import multer from 'multer';
import cloudinary from 'src/server/config/cloudinary';
import connectDB from 'src/server/middleware/mongodb';
import Order from 'src/server/models/Order';
import mailTrap from 'src/server/services/mail-trap';
import nodeMailer from 'src/server/services/node-mailer';
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
    const { name, email, occasion, profession, hobby, label, hasPet, description, size, delivery, price, country, address, zip, phone } = req.body;
    const shipping = {
        country, address, zip, phone
    }

    // if (!validatePrice({ size, delivery, price }, req.files)) {
    //     return res.status(200).json({ status: false, message: ERROR_MESSAGE })
    // }

    for (let i = 0; i < req.files.length; i++) {
        const file = req.files[i];
        try {
            if (!file.mimetype.startsWith('image/') || file.size > 5485760) {
                return res.status(200).json({ status: false, message: 'It looks like you have an image that is unsupported type or exceeds 5Mb - please change it and try again!' });
            }

            const b64 = Buffer.from(file.buffer).toString('base64');
            const dataURI = `data:${file.mimetype};base64,${b64}`;
            const response = await cloudinary.uploader.upload(dataURI, {
                folder: `${name}_${occasion}_${orderNumber}`,
                public_id: `image_${i}`,
            });
            images.push(response.secure_url);
        } catch (error) {
            console.log(error);
        }
    }

    const order = new Order({
        orderNumber, name, email, occasion, profession, hobby, label, hasPet, description, size, delivery, price, images, shipping
    })

    try {
        await order.save()
    } catch (err) {
        console.log(err);
        return res.status(200).json({ status: false, message: ERROR_MESSAGE });
    }

    if (await mailTrap({
        receiver: email,
        template_uuid: 'b8a8baa1-ba8d-4199-acf6-7ecfaf47ec9a',
        subject: 'Order Confirmed',
        data: {
            orderNumber, name, occasion, profession, hobby, label, hasPet, description, size, delivery, price, images, shipping
        }
    })) {

        await nodeMailer({
            subject: `New Order ${orderNumber}`,
            template: 'order-notification.html',
            data: {
                orderNumber, name, email, occasion, profession, hobby, label, hasPet, description, size, delivery, price, images, shipping
            }
        });

        return res.status(200).json({ status: true, orderNumber });
    } else {
        return res.status(200).json({ status: false, message: ERROR_COMM });
    }

}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default connectDB(handler);
