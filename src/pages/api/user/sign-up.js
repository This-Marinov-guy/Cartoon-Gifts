import connectDB from 'src/server/middleware/mongodb';
import { hash } from 'bcryptjs';
import User from 'src/server/models/User';
import { ERROR_COMM } from '@utils/defines';
import useTranslation from 'next-translate/useTranslation';

const { t } = useTranslation('api');

async function handler(req, res) {
    //Only POST mothod is accepted
    if (req.method !== 'POST') {
        res.status(401).json({ status: false, message: t('methodNotAllowed') });
    }

    const { email, password } = req.body;

    if (!email || !email.includes('@') || !password) {
        res.status(422).json({ status: false, message: t('invalidInputs') });
        return;
    }

    try {
        const checkExisting = await User.findOne({ email: email });

        if (checkExisting) {
            res.status(422).json({ status: false, message: t('userExists') });
            return;
        }

        await User.create({
            email,
            password: await hash(password, 12),
        });

        res.status(200).json({ status: true, message: t('userCreated') });
    } catch (err) {
        console.log(err)
        res.status(500).json({ status: false, message: ERROR_COMM });
        return
    }

}

export default connectDB(handler);
