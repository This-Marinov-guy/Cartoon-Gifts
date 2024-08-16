import { PROMO_CODES } from "@utils/promo-codes";

const handler = (req, res) => {  
    if (req.method !== 'POST') {
        return res.status(401).json({ message: t('invalidAction') });
    }

    const { promoCode } = req.body;
    let status = false;

    PROMO_CODES.forEach((code) => {
        if (code.value == promoCode) {
            return res.status(200).json({ status: true, promoCode: code });
        }
    })

    return res.status(200).json({ status: false });
}

export default handler;
