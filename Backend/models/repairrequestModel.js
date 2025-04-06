const mongoose = require('mongoose');

const repairRequestSchema = new mongoose.Schema({
  issueDescription: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'diagnosing', 'repairing', 'completed', 'cancelled'],
    default: 'pending'
  },
  photos: [String],
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'client', required: true },
  mechanic: { type: mongoose.Schema.Types.ObjectId, ref: 'mechanic' },
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'vehicle', required: true },
  quote: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

repairRequestSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('repairrequest', repairRequestSchema);