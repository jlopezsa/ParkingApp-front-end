/* eslint-disable */
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const URL_BASE = 'http://localhost:8080';

function Activate() {
  const { token } = useParams();
  const navigate = useNavigate();
  const activate = async () => {
    const response = await fetch(`${URL_BASE}/auth/local/verify-account/${token}`);
    const data = await response.json();
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
