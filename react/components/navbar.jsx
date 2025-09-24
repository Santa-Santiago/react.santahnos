import CartWidget from './CartWidget';

const NavBar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        {/* Logo de la tienda */}
        <a className="navbar-brand" href="./index.html">
        <img 
            src="../Img/Logo" // Reemplaza con la ruta real de tu logo
            alt="Logo Ferretería" 
            width="30" 
            height="30" 
            className="d-inline-block align-text-top"/>Ferretería XYZ </a>

        {/* Enlaces de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="./index.html">Inicio</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="./pages/pedidos.html">Hace tu pedido</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="./pages/contacto.html">Contáctanos</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="./pages/login.html">Inicia Sesión</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="./pages/productos.html">Nuestros productos</a>
            </li>
        </ul>
        </div>

        {/* CartWidget renderizado dentro de NavBar */}
        <CartWidget />
    </div>
    </nav>
);
};

export default NavBar;