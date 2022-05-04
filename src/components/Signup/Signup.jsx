/* eslint-disable */
import { useState } from 'react';
import { createUser } from '../../services/users';
import Swal from 'sweetalert2';
import './Signup.scss';

function Signup() {
  const [dataUser, setDataUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPass: '',
  });
  const handleChange = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };

  const fetchCreateUser = async () => {
    const response = await createUser(dataUser);
    if (response.code === 11000) {
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Usuario ya fue registrado...!',
      })
    }else{
      Swal.fire(
        'Registro exitoso ',
        'Se ha enviado un email a su correo para la confirmación de su registro',
        'success'
      )
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCreateUser();
  };

  const handlerValidate = () => {
    const { firstName, lastName, email, password, confirmPass } = dataUser;
    const valido = !firstName.length || !lastName.length || !email.length || !password.length
      || !confirmPass.length;
    return valido;
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__h2">Registrarse</h2>
        <input className="form__input" type="text" onChange={handleChange} name="firstName" placeholder="Nombre" />
        <input className="form__input" type="text" onChange={handleChange} name="lastName" placeholder="Apellidos" />
        <input className="form__input" type="email" onChange={handleChange} name="email" placeholder="email" />
        <input className="form__input" type="password" onChange={handleChange} name="password" placeholder="Contraseña" />
        <input className="form__input" type="password" onChange={handleChange} name="confirmPass" placeholder="Confirmar contraseña" />
        <p>
          <label htmlFor="rol">Tipo de usuario</label>
          <select className="form__input" onChange={handleChange} name="rol">
            <option value="admin">Admininistrador</option>
            <option value="user">Usuario</option>
          </select>
        </p>
        <button className="form__submit" type="submit" name="submit" disabled={handlerValidate()}>Registrar</button>
      </form>
    </div>
  );
}
export default Signup;
