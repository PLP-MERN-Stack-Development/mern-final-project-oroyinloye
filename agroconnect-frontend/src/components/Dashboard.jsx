import React, { useEffect, useState } from 'react';
import socket from '../socket';

function Dashboard() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receiveMessage', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => socket.off('receiveMessage');
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <button>Send Message</button>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;