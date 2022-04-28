/* eslint-disable */
import { useState } from 'react';
import { createUser } from '../../services/users';
import './Signup.scss';
function Signup() {
  const [dataUser, setDataUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const handleChange = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value
    })
  };

  const fetchCreateUser = async () => {
    await createUser(dataUser);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCreateUser();
  }

  const handlerValidate = () => {
    const { firstName, lastName, email, password, confirmPass } = dataUser;
    let valido = !firstName.length || !lastName.length || !email.length || !password.length || !confirmPass.length
    return valido;
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className='form__h2'>Registrarse</h2>
        <input className="form__input" type="text" onChange={handleChange} name="firstName" placeholder="Nombre" />
        <input className="form__input" type="text" onChange={handleChange} name="lastName" placeholder="Apellidos" />
        <input className="form__input" type="email" onChange={handleChange} name="email" placeholder="email" />
        <input className="form__input" type="password" onChange={handleChange} name="password" placeholder="Contraseña" />
        <input className="form__input" type="password" onChange={handleChange} name="confirmPass" placeholder="Confirmar contraseña" />
        <p>
          <label htmlFor="Rol" >Tipo de usuario</label>
          <select className="form__input" onChange={handleChange} name='role'>
            <option value="admin">Admininistrador</option>
            <option value="user">Usuario</option>
          </select>
        </p>
        <button className="form__submit" type="submit" name="submit" disabled={handlerValidate()}>Registrar</button>
      </form>
    </div>
  )
}
export default Signup;
