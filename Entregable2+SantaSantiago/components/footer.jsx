import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © 2025 Distribuidora de Materiales de Construcción. Todos los derechos reservados. |{' '}
          <Link to="/">Volver al Inicio</Link>
        </p>
        <div className="social-icons">
          <a href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;