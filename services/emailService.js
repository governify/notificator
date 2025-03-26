import sgMail from "@sendgrid/mail";
import appConfig from "../appConfig.js";
const SENDGRID_API_KEY = appConfig.sendgridApiKey;
const FROM = appConfig.fromEmail;

sgMail.setApiKey(SENDGRID_API_KEY);

export const sendEmail = async (to, subject, text, html) => {
  const msg = {
    to,
    from: FROM,
    subject,
    text,
    html,
  };

  await sgMail.send(msg);
};
