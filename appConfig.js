import dotenv from 'dotenv';
dotenv.config();

export default {
    port: process.env.PORT || 6100,
    fromEmail: process.env.FROM_EMAIL,
    sendgridApiKey: process.env.SENDGRID_API_KEY,
}
