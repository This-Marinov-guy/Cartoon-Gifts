import { MailtrapClient } from "mailtrap";

const mailTrap = (options) => {
    const TOKEN = process.env.MAIL_TRAP_PASS;
    const ENDPOINT = "https://send.api.mailtrap.io/";

    const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

    const sender = {
        email: "no-reply@cartoongiftseu.com",
        name: "Cartoon Gifts",
    };
    const recipients = [
        {
            email: options.receiver,
        }
    ];

    client
        .send({
            from: sender,
            to: recipients,
            template_uuid: options.template_uuid,
            template_variables: options.data
        })
        .then(() => { return true })
        .catch((err) => {
            console.log(err);
            return false
        });
}

export default mailTrap;
