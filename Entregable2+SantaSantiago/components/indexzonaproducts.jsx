const ProductsIndex = () => {
  return (
    <section className="productsindex">
      <div className="product-category animate__animated animate__fadeIn">
        <h2 lang="es">MATERIALES DE CONSTRUCCIÓN DE CALIDAD</h2>
        <ul>
          <li>Durabilidad asegurada</li>
          <li>Aptitud superior</li>
          <li>Bajo mantenimiento</li>
        </ul>
      </div>
      <div className="product-category animate__animated animate__fadeIn" style={{ animationDelay: '0.2s' }}>
        <h2 lang="es">EQUIPOS ELECTRÓNICOS AVANZADOS</h2>
        <ul>
          <li>Innovación tecnológica</li>
          <li>Eficiencia energética</li>
          <li>Diseño ergonómico</li>
        </ul>
      </div>
    </section>
  );
};

export default ProductsIndex;