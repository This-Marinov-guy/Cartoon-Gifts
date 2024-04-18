import nextConnect from 'next-connect';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

export const uploadMultipleImages = async (files, folder, format = 'jpg', public_id = '010') => {
    cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

// Configure Cloudinary Storage
const storage = new CloudinaryStorage({
cloudinary: cloudinary,
params: {
folder: folder,
format: async (req, file) => format, 
public_id: (req, file) => public_id,
},
});

const parser = multer({ storage: storage });
    
    try {
const files = await new Promise((resolve, reject) => {
parser.array('images')(req, {}, err => {
if (err) {
reject(err);
}
resolve(req.files);
});
});
res.json(files);
} catch (error) {
res.status(500).json({ error: error.message });
}
};
