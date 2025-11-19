import React, { useEffect, useState } from "react";
import { getProfile } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProfile() {
      setLoading(true);
      setMessage("");
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (err) {
        console.error(err);
        setMessage("❌ Failed to load profile. Please login again.");
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  // ✅ Logout handler
  function handleLogout() {
    localStorage.removeItem("token"); // clear saved token
    navigate("/login"); // redirect to login page
  }

  if (loading) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Dashboard</h2>
        {message && <p className="error">{message}</p>}
        {profile ? (
          <div>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
          </div>
        ) : (
          <p>No profile data available.</p>
        )}

        {/* ✅ Logout button */}
        <button className="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
