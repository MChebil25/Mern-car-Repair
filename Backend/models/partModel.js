const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, default: 0 },
  compatibleVehicles: [{
    make: String,
    model: String,
    years: String
  }],
  category: { 
    type: String, 
    enum: ['engine', 'brakes', 'electrical', 'body', 'interior'],
    required: true
  },
  images: [String]
}, { timestamps: true });

module.exports = mongoose.model('part', partSchema);