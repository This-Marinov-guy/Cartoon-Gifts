import multer from "multer";
import { uploadFiles } from "src/server/services/google-api";
import { v4 as uuidv4 } from "uuid";

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
};

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "invalidAction" });
  }

  await runMiddleware(req, res, myUploadMiddleware);

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
  },
};

export default handler;
