const mongoose = require('mongoose');
const User = require('./userModel');

const mechanicSchema = new mongoose.Schema({
  specialization: { type: String, required: true },
  certification: { type: String, required: true },
  hourlyRate: { type: Number, required: true },
  availability: { type: Boolean, default: true },
  rating: { type: Number, default: 0 }
});

module.exports = User.discriminator('mechanic', mechanicSchema);