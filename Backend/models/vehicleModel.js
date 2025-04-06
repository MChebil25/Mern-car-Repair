const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  vin: { type: String, required: true, unique: true },
  mileage: { type: Number, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'client', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('vehicle', vehicleSchema);