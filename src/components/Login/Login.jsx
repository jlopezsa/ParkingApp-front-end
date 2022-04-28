import './Login.scss';

function Login() {
  return (
    <div>
      <form className="form">
        <h2 className="form__h2">Ingresar</h2>
        <input className="form__input" type="email" name="email" placeholder="email" />
        <input className="form__input" type="password" name="password" placeholder="Contraseña" />

        <p>Olvidó la contraseña?</p>
        <input className="form__submit" type="submit" name="submit" value="Ingresar" />
        <p>No tiene cuenta? Registrese ahora!</p>

      </form>
    </div>
  );
}
export default Login;
