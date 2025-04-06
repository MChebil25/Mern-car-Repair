const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'clientModel', required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'orderitemModel' }],
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  shippingAddress: {
    street: String,
    city: String,
    postalCode: String,
    country: String
  },
  payment: { type: mongoose.Schema.Types.ObjectId, ref: 'payment' }
}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema);