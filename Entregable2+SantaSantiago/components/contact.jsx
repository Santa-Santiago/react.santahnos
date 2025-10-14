const Contact = () => {
  return (
    <section className="seccion-contacto-login">
      <div className="container">
        <div className="text-center animate__animated animate__fadeInUp">
          <h1>Contáctanos</h1>
          <p>Estamos aquí para ayudarte con tus proyectos de construcción. ¡Envíanos tu consulta!</p>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 animate__animated animate__fadeInLeft" style={{ animationDelay: '0.2s' }}>
            <div className="formulario-contacto-login">
              <form action="/submit" method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre * <span className="visually-hidden">(requerido)</span></label>
                  <input type="text" className="form-control" id="name" name="name" required aria-describedby="name-error" />
                  <div id="name-error" className="invalid-feedback">Por favor, ingrese su nombre.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico * <span className="visually-hidden">(requerido)</span></label>
                  <input type="email" className="form-control" id="email" name="email" required aria-describedby="email-error" />
                  <div id="email-error" className="invalid-feedback">Por favor, ingrese un correo válido.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Teléfono</label>
                  <input type="tel" className="form-control" id="phone" name="phone" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Mensaje * <span className="visually-hidden">(requerido)</span></label>
                  <textarea className="form-control" id="message" name="message" rows="5" required aria-describedby="message-error"></textarea>
                  <div id="message-error" className="invalid-feedback">Por favor, ingrese su mensaje.</div>
                </div>
                <button type="submit" className="btn btn-contacto">Enviar Mensaje</button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 animate__animated animate__fadeInRight" style={{ animationDelay: '0.4s' }}>
            <div className="informacion-contacto-login">
              <h3>Información de Contacto</h3>
              <p><i className="fas fa-map-marker-alt"></i> <strong>Dirección:</strong> Av. Construcción 123, Ciudad, País</p>
              <p><i className="fas fa-phone"></i> <strong>Teléfono:</strong> +123 456 7890</p>
              <p><i className="fas fa-envelope"></i> <strong>Correo:</strong> info@distribuidoraconstruccion.com</p>
              <p><i className="fas fa-clock"></i> <strong>Horario:</strong> Lunes a Viernes, 8:00 AM - 6:00 PM</p>
              <p><i className="fas fa-clock"></i> <strong>Sábado:</strong> 9:00 AM - 1:00 PM</p>
            </div>
            <div className="contenedor-mapa-login">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713548726!2d-58.38155948477062!3d-34.60373888045995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d94d23165%3A0x9a5a5f68a5dd1a13!2sBuenos+Aires%2C+Argentina!5e0!3m2!1sen!2sus!4v1629800551234!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;