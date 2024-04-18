import cloudinary from './cloudinary.js';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

// Function to upload images and return their URLs
export async function uploadImages(files, folder, format ='jpg', id = '10010') {

  const parser = multer({ storage: storage });


  // Configure Cloudinary Storage
const storage = new CloudinaryStorage({
cloudinary: cloudinary,
params: {
folder: folder,
format: async (req, file) => format, // or other formats
public_id: (req, file) => id, // generate a unique ID for each file
},
});
const uploader = async (path) => await cloudinary.uploader.upload(path);

// Map over the files and upload each one
const uploadPromises = files.map(file => uploader(file.path));

// Wait for all uploads to finish
const imageResponses = await Promise.all(uploadPromises);

// Extract the secure URLs from the responses
const imageUrls = imageResponses.map(res => res.secure_url);

return imageUrls;
}
