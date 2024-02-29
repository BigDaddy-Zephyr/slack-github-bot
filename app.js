const { App } = require('@slack/bolt');
require('dotenv').config()
const app = new App({
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

app.event('reaction_added', async ({ event, client, logger }) => {
  try {
    const result = await client.chat.postMessage({
      channel: event.item.channel,
      text: `Hello <@${event.user}>! We have added an issue for your concern.`
    });
    logger.info(result);
  }
  catch (error) {
    logger.error(error);
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();