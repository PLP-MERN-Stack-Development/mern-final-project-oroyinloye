import React, { useEffect, useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in first');
      window.location.href = '/login';
      return;
    }

    fetch('https://mern-final-project-oroyinloye.onrender.com/api/dashboard', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setMessage(data.message);
        } else {
          alert('Access denied');
          window.location.href = '/login';
        }
      })
      .catch((err) => {
        console.error('Dashboard error:', err);
        alert('Network error');
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Welcome to Your Dashboard</h2>
      <p className="dashboard-info">{message}</p>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;