const cron = require('node-cron');
const { sendReminderEmail } = require('./emailService');
const TaskLog = require('./taskLogModel');

cron.schedule('* * * * *', async () => {
  try {
    await sendReminderEmail();
    const log = new TaskLog({ task: 'sendReminderEmail', status: 'Success' });
    await log.save();
  } catch (err) {
    const log = new TaskLog({ task: 'sendReminderEmail', status: 'Failed', error: err.message });
    await log.save();
  }
});
