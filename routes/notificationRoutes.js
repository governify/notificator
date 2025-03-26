import express from "express";
import { sendEmailNotification } from "../controllers/emailController.js";
import { sendSlackNotification } from "../controllers/slackController.js";
import { validateEmailBody, validateSlackBody } from "../validators/notificationValidators.js";

const router = express.Router();

router.post("/notify/email", validateEmailBody, sendEmailNotification);
router.post("/notify/slack", validateSlackBody, sendSlackNotification);

export default router;
