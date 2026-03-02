import multer from 'multer';
import { uploadSingleFile } from 'src/server/services/google-api';

const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
});

const runMiddleware = (req, res, fn) =>
    new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) return reject(result);
            resolve(result);
        });
    });

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ status: false, message: 'invalidAction' });
    }

    try {
        await runMiddleware(req, res, upload.single('image'));
    } catch (err) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(413).json({ status: false, message: 'File too large. Max 5MB.' });
        }
        return res.status(400).json({ status: false, message: 'Upload error' });
    }

    const { folderId, index } = req.body;

    if (!folderId) {
        return res.status(400).json({ status: false, message: 'folderId is required' });
    }

    if (!req.file) {
        return res.status(400).json({ status: false, message: 'No image provided' });
    }

    try {
        const url = await uploadSingleFile(req.file, folderId, parseInt(index, 10) || 0);
        return res.status(201).json({ status: true, url });
    } catch (err) {
        console.error('upload-single-image error:', err);
        return res.status(500).json({ status: false, message: 'Upload failed' });
    }
}

export const config = {
    api: {
        bodyParser: false,
        maxDuration: 40,
    },
};
