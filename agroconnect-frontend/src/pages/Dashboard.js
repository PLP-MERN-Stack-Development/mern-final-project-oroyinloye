import React from "react";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <>
          <p>Welcome back, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
}

export default Dashboard;
