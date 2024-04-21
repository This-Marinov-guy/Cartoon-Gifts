import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';



const nodeMailer = async (options) => {
    const readHTMLFile = function (path, callback) {
        fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
            if (err) {
                callback(err);
            }
            else {
                callback(null, html);
            }
        });
    };

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cartoongifts.eu@gmail.com',
            pass: process.env.GMAIL_PASS
        }
    });

    readHTMLFile(__dirname + '../templates/' + options.template, function (err, html) {
        if (err) {
            console.log('error reading file', err);
            return false;
        }

        const template = handlebars.compile(html);

        const htmlToSend = template(options.data);

        const mailOptions = {
            from: options.from ?? 'notification-center@example.com',
            to: options.to ?? 'cartoongifts.eu@gmail.com',
            subject: options.subject,
            html: htmlToSend,
        };

        transporter.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log(error);
                return false
            }

        });
    });

    return true

};

export default nodeMailer;