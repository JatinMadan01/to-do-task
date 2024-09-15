import 'dotenv/config';
import express from 'express';
import connectDB from './db.js';
import TaskLog from './taskLogModel.js'; // Ensure file extension is included
import taskScheduler from './taskScheduler.js'; // Ensure file extension is included

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.get('/task-logs', async (req, res) => {
  try {
    const logs = await TaskLog.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
