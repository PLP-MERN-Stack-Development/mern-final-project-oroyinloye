// src/utils/api.js

// Base URL comes from environment variable
const API_URL = process.env.REACT_APP_API_URL;

// Helper to handle responses
async function handleResponse(res) {
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || `Request failed with status ${res.status}`);
  }
  return res.json();
}

// Register new user
export async function registerUser(name, email, password) {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  return handleResponse(res);
}

// Login existing user
export async function loginUser(email, password) {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(res);
}

// Get profile of logged-in user
export async function getProfile() {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/auth/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return handleResponse(res);
}
