const Pedidos = () => {
  return (
    <main className="container my-5">
      <h1 className="text-center mb-4 animate__animated animate__fadeIn">Hacé tu Pedido de Distribución</h1>
      <form id="pedido-form" className="contenedor-formulario-pedidos" action="/submit-pedido" method="POST">
        <div className="grupo-campo-pedido mb-3">
          <label htmlFor="razon-social" className="form-label">Razón Social</label>
          <input type="text" className="form-control" id="razon-social" name="razon-social" placeholder="Razón Social" required />
        </div>
        <div className="grupo-campo-pedido mb-3">
          <label htmlFor="direccion-obra" className="form-label">Dirección de Obra</label>
          <input type="text" className="form-control" id="direccion-obra" name="direccion-obra" placeholder="Dirección de Obra" required />
        </div>
        <div className="grupo-campo-pedido mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Nombre" required />
        </div>
        <div className="grupo-campo-pedido mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono / Celular</label>
          <input type="tel" className="form-control" id="telefono" name="telefono" placeholder="Teléfono / Celular" required />
        </div>
        <div className="grupo-campo-pedido mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
        </div>
        <div className="grupo-campo-pedido mb-3">
          <label htmlFor="pedido" className="form-label">Pedido</label>
          <textarea className="form-control" id="pedido" name="pedido" placeholder="Detalla tu pedido" rows="5" required></textarea>
        </div>
        <button type="submit" className="boton-pedidos-enviar">Enviar</button>
      </form>
    </main>
  );
};

export default Pedidos;