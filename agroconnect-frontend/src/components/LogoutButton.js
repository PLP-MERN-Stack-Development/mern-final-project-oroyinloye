import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutModal from './LogoutModal';
import './Navbar.css';   // keep Navbar styles for button consistency

function LogoutButton() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <button className="logout-btn" onClick={() => setShowModal(true)}>
        Logout
      </button>
      <LogoutModal
        show={showModal}
        onConfirm={handleLogout}
        onCancel={() => setShowModal(false)}
      />
    </>
  );
}

export default LogoutButton;
