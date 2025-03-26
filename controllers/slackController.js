import { markdownToSlackMrkdwn } from "../services/formatterService.js";
import { sendSlackMessage } from "../services/slackService.js";

/**
 * Sends a Slack notification.
 * @param {Object} req - The request object containing Slack details.
 * @param {Object} res - The response object.
 */
export const sendSlackNotification = async (req, res) => {
  const { slackWebhookUrl, message } = req.body;

  try {
    let slackFormattedMessage = markdownToSlackMrkdwn(message);
    await sendSlackMessage(slackWebhookUrl, slackFormattedMessage);
    res.status(200).json({ success: true, message: "Slack notification sent successfully" });
  } catch (error) {
    console.error("Error sending Slack notification:", error);
    res.status(500).json({ success: false, message: "Failed to send Slack notification" });
  }
};
