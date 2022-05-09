/* eslint-disable */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { saveAdminData } from '../../store/actions';
import './Login.scss';

const API_URL = process.env.REACT_APP_URL;

function Login() {
  const [form, setForm] = useState(null);
  const [dataUser, setDataUser] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/auth/local/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const { token, profile, id } = await response.json();
      localStorage.setItem('token', token);
      dispatch(saveAdminData({ profile, id }));
      if (response.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Algo salió mal',
          text: 'Usuario o contraseña no válida...',
        });
      } else {
        Swal.fire(
          'Login exitoso ',
          'Usuario autenticado corréctamente...!',
          'success',
        );
        profile.role === 'admin' ? navigate('/AdminPage') : navigate('/Search');
      }
      // setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
  }, []);

  const handlerValidate = () => {
    const { email, password } = dataUser;
    const valido = !email.length || !password.length;
    return valido;
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__h2">Ingresar</h2>
        <input data-cy="login_input_name" className="form__input" type="text" name="email" placeholder="Enter an email" onChange={handleInputChange} />
        <input data-cy="login_input_password" className="form__input" type="password" name="password" placeholder="Enter a password" onChange={handleInputChange} />

        <p>Olvidó la contraseña?</p>
        <button className="form__submit" type="submit" name="submit" disabled={handlerValidate()}>Login</button>
        <p>
          No tiene cuenta?
          <Link to="/LogUp">Registrese ahora!</Link>
        </p>
      </form>
    </div>
  );
}
export default Login;
