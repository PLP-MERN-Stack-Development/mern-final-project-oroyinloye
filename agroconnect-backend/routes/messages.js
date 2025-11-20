// backend/routes/messages.js
const express = require("express");
const auth = require("../middleware/auth");
const Message = require("../models/Message");
const router = express.Router();

/**
 * GET /api/messages
 * Fetch all messages for the logged-in user
 */
router.get("/", auth, async (req, res) => {
  try {
    const messages = await Message.find({ recipient: req.user.email }).sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

/**
 * POST /api/messages
 * Send a new message
 */
router.post("/", auth, async (req, res) => {
  try {
    const { recipient, content } = req.body;
    if (!recipient || !content) {
      return res.status(400).json({ error: "Recipient and content are required" });
    }

    const message = await Message.create({
      sender: req.user.email,
      recipient,
      content,
    });

    res.status(201).json({ message: "Message sent successfully", data: message });
  } catch (err) {
    res.status(500).json({ error: "Failed to send message" });
  }
});

/**
 * PATCH /api/messages/:id/read
 * Mark a message as read
 */
router.patch("/:id/read", auth, async (req, res) => {
  try {
    const updated = await Message.findOneAndUpdate(
      { _id: req.params.id, recipient: req.user.email },
      { read: true },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: "Message not found" });

    res.json({ message: "Message marked as read", data: updated });
  } catch (err) {
    res.status(500).json({ error: "Failed to update message" });
  }
});

module.exports = router;
