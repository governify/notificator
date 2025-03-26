import { body, validationResult } from "express-validator";

export const validateEmailBody = [
  body("to")
    .custom((value) => {
      if (typeof value === "string") {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Validate single email
      } else if (Array.isArray(value)) {
        return value.every((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)); // Validate array of emails
      }
      throw new Error("To must be a valid email or an array of valid emails.");
        })
        .withMessage("To must be a valid email or an array of valid emails."),
      body("subject").isString().notEmpty().withMessage("Subject is required."),
      body("text")
        .optional()
        .isString()
        .withMessage("Text must be a string."),
      body("html")
        .optional()
        .isString()
        .withMessage("HTML must be a string."),
      body()
        .custom((value, { req }) => {
      if (!req.body.text && !req.body.html) {
        throw new Error("Either text or html must be present.");
      }
      return true;
        }),
      body("isMarkdown")
        .optional()
        .isBoolean()
        .withMessage("isMarkdown must be a boolean."),
      (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export const validateSlackBody = [
  body("slackWebhookUrl").isURL().withMessage("Slack webhook URL must be a valid URL."),
  body("message").isString().notEmpty().withMessage("Message content is required."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
