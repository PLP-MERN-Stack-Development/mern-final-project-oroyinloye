import React, { createContext, useState, useEffect } from "react";
import { getProfile } from "../utils/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user profile if token exists
  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const data = await getProfile();
        setUser(data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        localStorage.removeItem("token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  // Login: save token and fetch profile
  async function login(token) {
    localStorage.setItem("token", token);
    try {
      const data = await getProfile();
      setUser(data);
    } catch (err) {
      console.error("Login failed:", err);
      logout();
    }
  }

  // Logout: clear token and user
  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
