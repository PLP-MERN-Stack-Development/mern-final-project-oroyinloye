const BASE_URL = process.env.REACT_APP_API_URL;

export async function login(email, password) {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return res.json();
}

export async function getProfile() {
  const token = localStorage.getItem('token');
  const res = await fetch(`${BASE_URL}/api/auth/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}
