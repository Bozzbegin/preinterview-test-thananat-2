const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    url: String,
    timestamp: {
        type: Date,
        default: () => Date.now() + 7 * 60 * 60 * 1000,
        required: true,
      },
});

module.exports = mongoose.model('History', historySchema);