import { sendEmail } from "../services/emailService.js";
import { markdownToHtml } from "../services/formatterService.js";

/**
 * Sends an email notification.
 * @param {Object} req - The request object containing email details.
 * @param {Object} res - The response object.
 */
export const sendEmailNotification = async (req, res) => {
    // hasMardown injected by middleware
    const { to, subject, text, html, isMarkdown } = req.body;

    try {
        let htmlContent = html;

        if (isMarkdown) {
            htmlContent = markdownToHtml(html);
        }
        await sendEmail(to, subject, text, htmlContent);
        res.status(200).json({ success: true, message: "Email notification sent successfully" });
    } catch (error) {
        console.error("Error sending email notification:", error);
        res.status(500).json({ success: false, message: "Failed to send email notification" });
    }
};
