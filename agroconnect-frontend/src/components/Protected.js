import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Protected({ children }) {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div>Loading…</div>;
  return user ? children : <Navigate to="/login" replace />;
}
