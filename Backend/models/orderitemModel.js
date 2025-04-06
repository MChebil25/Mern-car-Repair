const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  part: { type: mongoose.Schema.Types.ObjectId, ref: 'part', required: true },
  quantity: { type: Number, required: true, min: 1 },
  unitPrice: { type: Number, required: true },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'order', required: true }
});

module.exports = mongoose.model('orderitem', orderItemSchema);