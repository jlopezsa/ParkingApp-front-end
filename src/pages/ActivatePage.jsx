import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

const { token } = useParams();
const navigate = Navigate();

const activate = async () => {
  const response = await fetch(`${URL_BASE}/auth/local/verify-account/${token}`);
  const data = await response.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
    navigate('/');
  }
  useEffect(() => {
    activate();
  }, []);
};
