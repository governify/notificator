import dotenv from 'dotenv';
dotenv.config();

export default {
    port: process.env.PORT || 6100,
    fromEmail: process.env.FROM_EMAIL,
    resendApiKey: process.env.RESEND_API_KEY,
}
