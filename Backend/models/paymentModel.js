const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  method: { 
    type: String, 
    enum: ['credit_card', 'paypal', 'bank_transfer'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending'
  },
  transactionId: { type: String },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'clientModel', required: true },
  repairRequest: { type: mongoose.Schema.Types.ObjectId, ref: 'repairrequestModel' },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'order' }
}, { timestamps: true });

module.exports = mongoose.model('payment', paymentSchema);