function Signup() {
  return (
    <>
      <div className="main-container">
        <form className="main-container__form">
          <h2>Registrarse</h2>
          <input className="main-container__form--input" type="text" name="name" placeholder="Nombre" />
          <input className="main-container__form--input" type="text" name="last-name" placeholder="Apellidos" />
          <input className="main-container__form--input" type="email" name="email" placeholder="emal" />
          <input className="main-container__form--input" type="password" name="password" placeholder="Contraseña" />
          <input className="main-container__form--input" type="password" name="confirm-password" placeholder="Confirmar contraseña" />

          <input className="main-container__form--submit" type="submit" name="submit" value="Registrar" />
        </form>
      </div>
    </>
  )
}
export default Signup;
