import React from 'react';
import './LogoutModal.css';

function LogoutModal({ show, onConfirm, onCancel }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3>Confirm Logout</h3>
        <p>Are you sure you want to log out?</p>
        <div className="modal-actions">
          <button className="btn cancel-btn" onClick={onCancel}>Cancel</button>
          <button className="btn confirm-btn" onClick={onConfirm}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
