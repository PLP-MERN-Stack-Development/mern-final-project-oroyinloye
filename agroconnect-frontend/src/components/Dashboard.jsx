import React, { useEffect, useState } from 'react';
import { getProfile } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';   // ✅ import CSS

function Dashboard() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfile() {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const data = await getProfile();
        setProfile(data);
      } catch (err) {
        console.error('Error fetching profile:', err);
        navigate('/login');
      }
    }
    fetchProfile();
  }, [navigate]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="dashboard-container">
      <h1>Welcome, {profile.name}</h1>
      <p>Email: {profile.email}</p>
      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem('token');
          navigate('/login');
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
