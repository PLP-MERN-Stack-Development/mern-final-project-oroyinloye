import React, { useEffect, useState } from 'react';
import { getProfile } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfile() {
      const res = await getProfile();
      if (res.error) {
        alert('Unauthorized, please login again');
        navigate('/login');
      } else {
        setUser(res);
      }
    }
    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="dashboard">
      {user ? (
        <>
          <h1>Welcome, {user.name}</h1>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
