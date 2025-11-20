// frontend/src/pages/Messages.js
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchMessages = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/messages", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch messages");
        setMessages(data);
      } catch (err) {
        toast.error(err.message);
      }
    };

    fetchMessages();
  }, []);

  const markAsRead = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5000/api/messages/${id}/read`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to mark as read");
      toast.success("Message marked as read");
      setMessages((prev) =>
        prev.map((msg) => (msg._id === id ? { ...msg, read: true } : msg))
      );
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container">
      <h2 className="page-title">Messages</h2>
      <div className="card">
        {messages.length === 0 ? (
          <p>No messages</p>
        ) : (
          messages.map((msg) => (
            <div key={msg._id} style={{ marginBottom: "10px" }}>
              <p><strong>From:</strong> {msg.sender}</p>
              <p>{msg.content}</p>
              <p>Status: {msg.read ? "Read" : "Unread"}</p>
              {!msg.read && (
                <button className="btn btn-primary" onClick={() => markAsRead(msg._id)}>
                  Mark as Read
                </button>
              )}
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
