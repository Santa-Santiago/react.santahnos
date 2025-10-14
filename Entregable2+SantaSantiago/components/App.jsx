import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import Hero from './components/Hero';
import ProductsIndex from './components/ProductsIndex';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Login from './components/Login';
import Pedidos from './components/Pedidos';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ItemListContainer greeting="Bienvenido a Santa Hnos" />
                <ProductsIndex />
                <Testimonial />
                <Footer />
              </>
            }
          />
          <Route
            path="/productos"
            element={
              <>
                <ItemListContainer greeting="Nuestros Productos de Construcción" />
                <Footer />
              </>
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <>
                <ItemListContainer greeting="Productos por categoría" />
                <Footer />
              </>
            }
          />
          <Route
            path="/product/:productId"
            element={
              <>
                <ItemDetailContainer />
                <Footer />
              </>
            }
          />
          <Route
            path="/contacto"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/carrito"
            element={
              <>
                <Cart />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path="/pedidos"
            element={
              <>
                <Pedidos />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;