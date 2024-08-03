import useTranslation from "next-translate/useTranslation";
const {t} = useTranslation("api");
const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(401).json({ message: t('invalidAction') });
    }

    
}