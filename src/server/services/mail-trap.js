import { MailtrapClient } from "mailtrap";

const mailTrap = async (options) => {
    try {
        const TOKEN = process.env.MAIL_TRAP_PASS;
        const ENDPOINT = "https://send.api.mailtrap.io/";

        const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

        const sender = {
            email: "noreply@cartoongiftseu.com",
            name: "Cartoon Gifts",
        };
        const recipients = [
            {
                email: options.receiver,
            }
        ];

        // Send the email using async/await
        await client.send({
            from: sender,
            to: recipients,
            subject: options.subject,
            template_uuid: options.template_uuid,
            template_variables: options.data,
        });

        // Return true if the email is sent successfully
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        // Return false if there's an error sending the email
        return false;
    }
}

export default mailTrap;
