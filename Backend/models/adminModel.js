const mongoose = require('mongoose');
const User = require('./userModel');

const adminSchema = new mongoose.Schema({
  permissions: {
    manageUsers: { type: Boolean, default: true },
    manageInventory: { type: Boolean, default: true },
    manageOrders: { type: Boolean, default: true },
    manageContent: { type: Boolean, default: true }
  },
  lastAccess: Date
});

// Add admin-specific methods
adminSchema.methods = {
  grantPermissions: function(permissions) {
    this.permissions = { ...this.permissions, ...permissions };
    return this.save();
  },
  revokePermissions: function(permissionKeys) {
    permissionKeys.forEach(key => {
      this.permissions[key] = false;
    });
    return this.save();
  }
};

module.exports = User.discriminator('admin', adminSchema);