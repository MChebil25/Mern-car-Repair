const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  rating: { 
    type: Number, 
    required: true,
    min: 1,
    max: 5
  },
  comment: { type: String },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'client', required: true },
  mechanic: { type: mongoose.Schema.Types.ObjectId, ref: 'mechanic', required: true },
  repairRequest: { type: mongoose.Schema.Types.ObjectId, ref: 'repairrequest' },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'order' }
}, { timestamps: true });

module.exports = mongoose.model('review', reviewSchema);