const Login = () => {
  return (
    <section className="seccion-contacto-login">
      <h1>Empezá tu Proyecto</h1>
      <form method="POST" action="/login">
        <div className="contenedor-formulario-login">
          <h3>Iniciar Sesión</h3>
          <div className="grupo-campo-login">
            <label htmlFor="login-email">Email</label>
            <input type="email" id="login-email" placeholder="Email" aria-required="true" />
          </div>
          <div className="grupo-campo-login">
            <label htmlFor="login-password">Contraseña</label>
            <input type="password" id="login-password" placeholder="Contraseña" aria-required="true" />
          </div>
          <button className="boton-login" type="submit">Enviar</button>
        </div>
      </form>
      <h2>¿No tenés cuenta? Registrate acá</h2>
      <form method="POST" action="/register">
        <div className="contenedor-formulario-login">
          <h3>Registrarme</h3>
          <div className="grupo-campo-login">
            <label htmlFor="register-email">Correo electrónico</label>
            <input type="email" id="register-email" placeholder="Correo electrónico" aria-required="true" />
          </div>
          <div className="grupo-campo-login">
            <label htmlFor="register-password">Contraseña</label>
            <input type="password" id="register-password" placeholder="Contraseña" aria-required="true" />
          </div>
          <p>¡Sumate hoy y arrancá tus proyectos ya!</p>
          <p>Enterate de nuestros beneficios 😎</p>
          <button className="boton-login" type="submit">Enviar</button>
        </div>
      </form>
    </section>
  );
};

export default Login;