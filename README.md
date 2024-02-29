# Slack Bot - Ticket Creator

## Overview

The Slack Bot - Ticket Creator is a simple yet powerful tool designed to streamline the process of creating issues or tickets in Github repo directly from Slack. With just a reaction, users can effortlessly turn a message into a structured and actionable item in your issue tracker.


## Installation

1. **Create a Slack App:**
   - Navigate to [Slack App Management](https://api.slack.com/apps).
   - Click on "Create New App."
   - Give your app a name (e.g., Ticket Creator) and select the desired workspace.

2. **Enable Event Subscriptions:**
   - In your app settings, go to "Event Subscriptions" and enable them.
   - Set the Request URL to your server endpoint where the bot is hosted.

3. **Subscribe to Bot Events:**
   - Subscribe to the `reaction_added` event.

4. **Install App to Workspace:**
   - Install the app to your workspace and grant the necessary permissions.

5. **Configure Environment Variables:**
   - Set up the required environment variables for your server:
     - `SLACK_SIGNING_SECRET`: Your Slack app's signing secret.
     - `SLACK_APP_TOKEN`: Your Slack app's App token.
     - `SLACK_BOT_TOKEN`: Your Slack app's Bot token.
     - `SLACK_SIGNING_SECRET`: Your slack Signing Secret.
     - `GITHUB_TOKEN`: Your Github Access Token.
     - `GITHUB_OWNER`: Your Github username.
     - `GITHUB_REPO`: Your Github repository.

6. **Run the Bot:**
   - Deploy the bot to your server or cloud platform.
   - Start the bot application.

## Usage

1. **React to a Message:**
   - In any channel, react to a message with the predefined "ticket" reaction emoji.

2. **Confirmation:**
   - The bot will acknowledge the reaction and provide a link to the newly created issue.

3. **Access the Issue:**
   - Click on the provided link to access the issue on Github.