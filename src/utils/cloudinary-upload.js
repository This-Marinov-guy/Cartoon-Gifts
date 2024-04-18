import cloudinary from './cloudinary.js';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

export async function imageParser(folder, format ='jpg', id = '10010') {
const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: folder,
		format: async (req, file) => format, // supports promises as well
		public_id: (req, file) => id,
	},
});

return multer({ storage: storage });
}

// used like
// const parser = imageParser(...);
// .parser.single('image') 
// then access with req.files or req.files
