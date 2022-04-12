/* eslint-disable */
import './Signup.scss';
function Signup() {
  return (
    <>
        <form className="form">
          <h2 className='form__h2'>Registrarse</h2>
          <input className="form__input" type="text" name="name" placeholder="Nombre" />
          <input className="form__input" type="text" name="last-name" placeholder="Apellidos" />
          <input className="form__input" type="email" name="email" placeholder="email" />
          <input className="form__input" type="password" name="password" placeholder="Contraseña" />
          <input className="form__input" type="password" name="confirm-password" placeholder="Confirmar contraseña" />
          <p>
            <label for="Rol" >Tipo de usuario</label>
            <select className="form__input" name='Rol'>
              <option value="admin">Admininistrador</option>
              <option value="user">Usuario</option>
            </select>
          </p>

          <input className="form__submit" type="submit" name="submit" value="Registrar" />

        </form>
    </>
  )
}
export default Signup;
