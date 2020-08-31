const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    googleID: { type: String, required: true },
    displayName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { tyep: String, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', UserSchema)
