// backend/models/Message.js
const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    sender: { type: String, required: true },       // could be farmer/buyer name or ID
    recipient: { type: String, required: true },    // user ID or email
    content: { type: String, required: true },
    read: { type: Boolean, default: false },        // track if message has been read
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
