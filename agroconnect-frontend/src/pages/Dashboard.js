// frontend/src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Dashboard.css"; // import the matching CSS

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must login to access the dashboard", { position: "top-right" });
      setLoading(false);
      return;
    }

    const fetchDashboard = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to load dashboard");
        }

        setDashboardData(data);
      } catch (err) {
        toast.error(err.message, { position: "top-right" });
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="card">
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="container">
        <div className="card">
          <p>No dashboard data available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="page-title">Dashboard</h2>
      <p className="page-subtitle">Overview of your account</p>

      <div className="card">
        <p><strong>Status:</strong> {dashboardData.message}</p>
        <p><strong>User:</strong> {dashboardData.user.email}</p>
        <p><strong>Role:</strong> {dashboardData.user.role}</p>

        {/* Stats grid */}
        <div className="dashboard-stats">
          <div className="stat-box">
            <h4>Products</h4>
            <p>{dashboardData.stats.productsCount}</p>
          </div>
          <div className="stat-box">
            <h4>Messages</h4>
            <p>{dashboardData.stats.messagesCount}</p>
          </div>
          <div className="stat-box">
            <h4>Last Login</h4>
            <p>{new Date(dashboardData.stats.lastLogin).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
