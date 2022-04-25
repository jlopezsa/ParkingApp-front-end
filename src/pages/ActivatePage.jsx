/* eslint-disable */
import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

const URL_BASE = 'http://localhost:8080';

function Activate() {
  const { token } = useParams();
  console.log('Estoy en Activate token', token);
  const navigate = Navigate();
  const activate = async () => {
    const response = await fetch(`${URL_BASE}/auth/local/verify-account/${token}`);
    const data = await response.json();
    console.log('Estoy en activate', data);
    if (data.token) {
      localStorage.setItem('token', data.token);
      navigate('/');
    }
  };
  useEffect(() => {
    activate();
  }, []);

  return (
    <div>Bienvenid@</div>
  );
}
export default Activate;
