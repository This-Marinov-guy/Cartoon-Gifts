import multer from "multer";
import { uploadFiles } from "src/server/services/google-api";
import { v4 as uuidv4 } from "uuid";
import { ERROR_COMM } from "@utils/defines";

const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB per file
    files: 5 // Maximum 5 files
  }
});
const myUploadMiddleware = upload.array("images", 5);

const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "invalidAction" });
  }

  try {
    await runMiddleware(req, res, myUploadMiddleware);
  } catch (error) {
    // Handle multer errors (file size, etc.)
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(413).json({ 
        status: false, 
        message: 'File size too large. Maximum 5MB per file.' 
      });
    }
    if (error.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({ 
        status: false, 
        message: 'Too many files. Maximum 5 files allowed.' 
      });
    }
    return res.status(400).json({ 
      status: false, 
      message: 'File upload error' 
    });
  }

  const orderNumber = uuidv4();
  let images = [];

  try {
    images = await uploadFiles(req.files, orderNumber);

    return res.status(201).json({
      status: true,
      images,
      orderNumber,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: false, message: ERROR_COMM });
  }
};

export const config = {
  api: {
    bodyParser: false,
    maxDuration: 40,
    responseLimit: false
  },
};

export default handler;
