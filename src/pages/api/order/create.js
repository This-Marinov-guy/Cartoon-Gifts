
import multer from 'multer';
import cloudinary from 'src/server/config/cloudinary';
import connectDB from 'src/server/middleware/mongodb';
import Order from 'src/server/models/Order';

const storage = multer.memoryStorage();
const upload = multer({ storage });
const myUploadMiddleware = upload.array("images");

function runMiddleware(req, res, fn) {
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
    await runMiddleware(req, res, myUploadMiddleware);

    const images = [];

    for (const file of req.files) {
        try {
            const b64 = Buffer.from(file.buffer).toString("base64");
            let dataURI = "data:" + file.mimetype + ";base64," + b64;
            const response = await cloudinary.uploader.upload(dataURI, {
                folder: "images",
            });
            images.push(response.secure_url);
        } catch (error) { }
    }

    const { name, email, occasion, profession, hobby, label, hasPet, description, size, delivery, price } = req.body;

    const order = new Order({
        name, email, occasion, profession, hobby, label, hasPet, description, size, delivery, price, images
    })

    try {
        await order.save()
    } catch (err) {
        console.log(err);
    }

    res.status(200).json({ status: false });
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default connectDB(handler);
