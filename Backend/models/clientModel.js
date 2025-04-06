const mongoose = require('mongoose');
const User = require('./userModel');

const clientSchema = new mongoose.Schema({
  vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'vehicle' }],
  paymentMethods: [{
    cardType: String,
    last4: String,
    tokenId: String
  }]
});

module.exports = User.discriminator('client', clientSchema);