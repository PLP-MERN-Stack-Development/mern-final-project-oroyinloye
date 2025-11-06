import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [message, setMessage] = useState('');

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

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
      <button onClick={() => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }}>Logout</button>
    </div>
  );
}

export default Dashboard;
import './Dashboard.css';

return (
  <div className="dashboard-container">
    <h2 className="dashboard-header">Welcome to Your Dashboard</h2>
    <p className="dashboard-info">{message}</p>
    <button className="logout-button" onClick={handleLogout}>Logout</button>
  </div>
);
import jwtDecode from 'jwt-decode';

useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) return;

  const decoded = jwtDecode(token);
  setUser(decoded); // decoded.userId or decoded.email depending on your payload
}, []);
import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
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

    const decoded = jwtDecode(token);
    setUser(decoded);

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
      . catch((err) => {
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
      {user && <p className="dashboard-user">Logged in as: {user.email}</p>}
      <p className="dashboard-info">{message}</p>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}