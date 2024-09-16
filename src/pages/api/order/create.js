
import { createOrder } from 'src/server/services/order-service';

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'invalidAction' });
    }

    try {
        const response = await createOrder({ ...req.body })

        if (response.status) {
            return res.status(200).json({ status: true, orderNumber });
        } else {
            return res.status(200).json({ status: false, message: response.message });
        }
    } catch (error) {
        return res.status(200).json({ status: false, message: ERROR_COMM });
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
