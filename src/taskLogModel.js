const mongoose = require('mongoose');

const taskLogSchema = new mongoose.Schema({
  task: { type: String, required: true },
  status: { type: String, required: true },
  error: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('TaskLog', taskLogSchema);
