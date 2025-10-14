import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  const categories = ['Materiales', 'Pinturas', 'Herramientas'];

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand animate__animated animate__fadeIn" to="/">
          <img
            src="../Img/LOGO RE FACHERO.png"
            alt="Logotipo de Santa Hnos"
            className="d-inline-block align-text-top"
            style={{ width: '30px', height: '30px' }}
          />
          Santa Hnos
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto animate__animated animate__fadeIn" style={{ animationDelay: '0.2s' }}>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/" exact>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/productos">
                Nuestros productos
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {categories.map(category => (
                  <li key={category}>
                    <NavLink
                      className="dropdown-item"
                      activeClassName="active"
                      to={`/category/${category.toLowerCase()}`}
                    >
                      {category}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/pedidos">
                Hace tu pedido
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/contacto">
                Contáctanos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/login">
                Inicia Sesión
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/carrito">
                <img
                  src="../Img/carrito.png"
                  alt="Logotipo de carrito"
                  style={{ width: '24px', height: '24px' }}
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;