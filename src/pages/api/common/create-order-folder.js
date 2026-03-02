import { createFolder } from 'src/server/services/google-api';
import { ORDER_DRIVE_FOLDER } from '@utils/defines';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ status: false, message: 'invalidAction' });
    }

    const { orderNumber } = req.body;

    if (!orderNumber) {
        return res.status(400).json({ status: false, message: 'Order number required' });
    }

    try {
        // createFolder already handles the "folder exists" case — returns existing id
        const folderId = await createFolder(ORDER_DRIVE_FOLDER, orderNumber);

        if (!folderId) {
            return res.status(500).json({ status: false, message: 'Failed to create folder' });
        }

        return res.status(200).json({ status: true, folderId, orderNumber });
    } catch (err) {
        console.error('create-order-folder error:', err);
        return res.status(500).json({ status: false, message: 'Failed to create folder' });
    }
}
