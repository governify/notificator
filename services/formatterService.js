import { marked } from 'marked';
import slackifyMarkdown from 'slackify-markdown';

/**
 * Converts a Markdown string to HTML.
 * @param {string} markdown - The Markdown string to convert.
 * @returns {string} - The resulting HTML string.
 */
export function markdownToHtml(markdown) {
  if (typeof markdown !== 'string') {
    throw new TypeError('Input must be a string');
  }
  return marked(markdown);
}

/**
 * Converts a Markdown string to Slack's Mrkdwn format.
 * @param {string} markdown - The Markdown string to convert.
 * @returns {string} - The resulting Slack Mrkdwn string.
 */
export function markdownToSlackMrkdwn(markdown) {
  if (typeof markdown !== 'string') {
    throw new TypeError('Input must be a string');
  }
  return slackifyMarkdown(markdown);
}