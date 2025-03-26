import axios from "axios";

export const sendSlackMessage = async (webhookUrl, message) => {
  try {
    await axios.post(webhookUrl, {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",//currently only supports mrkdwn not markdown
            text: message
          }
        }
      ]
    });
  } catch (error) {
    console.error("Error sending Slack message:", error);
    throw new Error("Failed to send Slack message");
  }
};
