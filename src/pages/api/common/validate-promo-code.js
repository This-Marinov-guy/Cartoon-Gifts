import { PROMO_CODES } from "@utils/promo-codes";

const handler = async (req, res) => {  

    if (req.method !== 'POST') {
        return res.status(401).json({ message: 'invalidAction' });
    }

    const { promoCode } = req.body;

    PROMO_CODES.forEach((code) => {
        if (code.value.toLowerCase() == promoCode.toLowerCase()) {
            return res.status(200).json({ status: true, promoCode: code });
        }
    })

    return res.status(200).json({ status: false });
}

export default handler;
