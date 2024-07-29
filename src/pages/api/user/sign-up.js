import connectDB from 'src/server/middleware/mongodb';
import { hash } from 'bcryptjs';
import User from 'src/server/models/User';
import { ERROR_COMM } from '@utils/defines';

async function handler(req, res) {
    //Only POST mothod is accepted
    if (req.method !== 'POST') {
        res.status(401).json({ status: false, message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    if (!email || !email.includes('@') || !password) {
        res.status(422).json({ status: false, message: 'Invalid Inputs' });
        return;
    }

    try {
        const checkExisting = await User.findOne({ email: email });

        if (checkExisting) {
            res.status(422).json({ status: false, message: 'User already exists' });
            return;
        }

        await User.create({
            email,
            password: await hash(password, 12),
        });

        res.status(200).json({ status: true, message: 'User created' });
    } catch (err) {
        console.log(err)
        res.status(500).json({ status: false, message: ERROR_COMM });
        return
    }

}

export default connectDB(handler);
