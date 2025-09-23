# Notificator API

The **Notificator API** is a service designed to send notifications via various channels such as email and Slack. It provides endpoints to handle notification requests and ensures a consistent response format.

## Features

- Send email notifications to single or multiple recipients.
- Send Slack notifications using webhook URLs.
- Supports plain text, HTML, and Markdown formats for messages.
- Provides clear and structured API responses.

## API Documentation

The API is documented using the OpenAPI 3.0 specification. The documentation can be found in the file:  
`/api/oas-notification.yaml`

### Endpoints

#### 1. `/notify/email` (POST)

- **Description**: Sends an email notification.
- **Request Body**:
  - `to`: Single email address or an array of email addresses.
  - `subject`: Subject of the email.
  - `text`: Plain text content of the email.
  - `html`: HTML content of the email (supports Markdown if `isMarkdown` is `true`).
  - `isMarkdown`: Boolean indicating if the `html` content is in Markdown format.
- **Responses**:
  - `200`: Email notification sent successfully.
  - `400`: Bad request (e.g., invalid email address).

#### 2. `/notify/slack` (POST)

- **Description**: Sends a Slack notification.
- **Request Body**:
  - `slackWebhookUrl`: The Slack webhook URL.
  - `message`: The content of the Slack message (supports Markdown).
- **Responses**:
  - `200`: Slack notification sent successfully.
  - `400`: Bad request (e.g., invalid webhook URL).

## Local Development

### Prerequisites

- Node.js (for running the server, if applicable).
- A tool to test APIs (e.g., Postman or cURL).

### Running the API Locally

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using:

    ```bash
    npm install
    ```

4. Copy the example environment file and configure API keys:

    ```bash
    cp .env.example .env
    ```

    Update the `.env` file with the required API keys and configuration.
5. Start the server using nodemon with:

    ```bash
    npm run dev
    ```

6. Access the API docs at `http://localhost:6100/api-docs`.

## Response Format

All responses follow a consistent structure:

```json
{
  "success": true,
  "message": "Operation result message"
}
```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

*Created for Governify organization by Manuel Otero Barbasán (motero2k).*
