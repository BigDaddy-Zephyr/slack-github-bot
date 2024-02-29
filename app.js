const { App } = require('@slack/bolt');
require('dotenv').config()
const { Octokit } = require("octokit")
const app = new App({
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});
app.event('reaction_added', async ({ event, client, logger }) => {
  try {
    if (event.reaction == 'ticket') {
      let result = await app.client.conversations.history({
        channel: event.item.channel, latest: event.item.ts,
        inclusive: true,
        limit: 1
      })
      let issueRequest = await octokit.request("POST /repos/{owner}/{repo}/issues", {
        owner: process.env.GITHUB_OWNER,
        repo: process.env.GITHUB_REPO,
        title: `${result.messages[0].text}`,
        body: `${result.messages[0].text}`,
      });
      await client.chat.postMessage({
        channel: event.item.channel,
        text: `Hello <@${event.user}>! We have added an issue for your concern here - ${issueRequest?.data?.html_url}`
      });
    }
  }
  catch (error) {
    logger.error(error);
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();