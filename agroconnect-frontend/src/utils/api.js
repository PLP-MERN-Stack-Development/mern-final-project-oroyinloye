const BASE_URL = process.env.REACT_APP_API_URL;

// REGISTER
export async function registerUser(name, email, password) {
  const res = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });
  if (!res.ok) throw new Error(`Register failed: ${res.status}`);
  return res.json();
}

// LOGIN
export async function loginUser(email, password) {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  if (!res.ok) throw new Error(`Login failed: ${res.status}`);
  const data = await res.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
  }
  return data;
}

// PROFILE
export async function getProfile() {
  const token = localStorage.getItem("token");
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  });
  if (!res.ok) throw new Error(`Profile fetch failed: ${res.status}`);
  return res.json();
}
