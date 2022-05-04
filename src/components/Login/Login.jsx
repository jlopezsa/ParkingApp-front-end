/* eslint-disable */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import './Login.scss';

function Login() {
  const [form, setForm] = useState(null);
  const [dataUser, setDataUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  //const [showForm, setShowForm] = useState(true);

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://parkingapp-back-end.herokuapp.com/auth/local/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const token = await response.json();
      localStorage.setItem('token', token);

      if(response.status === 401){
        Swal.fire({
          icon: 'error',
          title: 'Algo salió mal',
          text: 'Usuario o contraseña no válida...'
        })
      }else{
        Swal.fire(
          'Login exitoso ',
          'Usuario autenticado corréctamente...!',
          'success'
        )
        navigate('/Search');
      }
      //setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };
  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   setShowForm(true);
  // };

  useEffect(() => {
    const token = localStorage.getItem('token');
    //if (token) {
    //  setShowForm(false);
    //}
  }, []);

  const handlerValidate = () => {
    const { email, password } = dataUser;
    let valido = !email.length || !password.length
    return valido;
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__h2">Ingresar</h2>
        <input className="form__input" type="text" name="email" placeholder="Enter an email" onChange={handleInputChange} />
        <input className="form__input" type="password" name="password" placeholder="Enter a password" onChange={handleInputChange} />

        <p>Olvidó la contraseña?</p>
        <button className="form__submit" type="submit" name="submit" disabled={handlerValidate()} >Login</button>
        <p>No tiene cuenta? Registrese ahora!</p>
      </form>
    </div>
  );
}
export default Login;
