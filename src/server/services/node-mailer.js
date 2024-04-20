import nodemailer from 'nodemailer';

const nodeMailer = async (options) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cartoongifts.eu@gmail.com',
            pass: process.env.GMAIL_PASS
        }
    });

    const mailOptions = {
        from: options.from ?? 'notification-center@example.com',
        to: options.to ?? 'cartoongifts.eu@gmail.com',
        subject: options.subject,
        text: options.text,
        html: options.html,
    };

    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.log(error);
    }

    return false
};

export default nodeMailer;