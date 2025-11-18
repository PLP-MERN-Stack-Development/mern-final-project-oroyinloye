// agroconnect-frontend/src/utils/api.js
const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
  // Optional: warn so you catch missing env in builds
  // console.warn('REACT_APP_API_URL is not set');
}

export async function getExample() {
  const res = await fetch(`${API_URL}/api/example`, {
    headers: { 'Content-Type': 'application/json' }
  });
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}
