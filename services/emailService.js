import { Resend } from 'resend';
import appConfig from "../appConfig.js";
const RESEND_API_KEY = appConfig.resendApiKey;
const FROM = appConfig.fromEmail;

const resend = new Resend(RESEND_API_KEY);

export const sendEmail = async (to, subject, text, html) => {
    const message = {
        to: to,
        from: FROM,
        subject,
        text,
        html,
    }
    const { data, error } = await resend.emails.send(message);
    if (error) {
        return console.error({ error });
    }
    console.log({ data });
};


