import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

// Configure Cloudinary
cloudinary.config({
cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
api_key: process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Cloudinary Storage
const storage = new CloudinaryStorage({
cloudinary: cloudinary,
params: {
folder: 'uploads',
format: async (req, file) => 'png', // or other formats
public_id: (req, file) => 'generated-public-id', // generate a unique ID for each file
},
});

const parser = multer({ storage: storage });

// Function to upload images and return their URLs
export async function uploadImages(files) {
const uploader = async (path) => await cloudinary.uploader.upload(path);

// Map over the files and upload each one
const uploadPromises = files.map(file => uploader(file.path));

// Wait for all uploads to finish
const imageResponses = await Promise.all(uploadPromises);

// Extract the secure URLs from the responses
const imageUrls = imageResponses.map(res => res.secure_url);

return imageUrls;
}
