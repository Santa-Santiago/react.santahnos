import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const productsData = [
  { id: 1, name: "Bolsa de Cemento", price: 12000, category: "Materiales", img: "../Img/bolsacementosantaa.jpg", stock: 50 },
  { id: 2, name: "Ladrillos Rojos", price: 450000, category: "Materiales", img: "../Img/ladrillossanta.jpg", stock: 100 },
  { id: 3, name: "Pintura Blanca", price: 65000, category: "Pinturas", img: "../Img/pinturablanca.jpg", stock: 30 },
  { id: 4, name: "Varillas de Acero", price: 80000, category: "Materiales", img: "../Img/varillassanta.png", stock: 20 },
  { id: 5, name: "Arena de Construcción", price: 15000, category: "Materiales", img: "../Img/arenasanta.jpg", stock: 60 },
  { id: 6, name: "Cemento Prefabricado", price: 55000, category: "Materiales", img: "../Img/Cemento.jpg", stock: 40 },
  { id: 7, name: "Escalera De Aluminio", price: 149000, category: "Herramientas", img: "../Img/Escalera.jpg", stock: 15 },
  { id: 8, name: "Taladro Diamante", price: 55000, category: "Herramientas", img: "../Img/taladrosanta.jpg", stock: 25 }
];

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const filteredProducts = categoryId
            ? productsData.filter(product => product.category.toLowerCase() === categoryId.toLowerCase())
            : productsData;
          resolve(filteredProducts);
        }, 1000);
      });
    };

    fetchProducts().then(data => setProducts(data));
  }, [categoryId]);

  return (
    <section className="seccion-productos-1">
      <div className="container">
        <h2 className="animate__animated animate__fadeIn">{greeting}</h2>
        <div className="row g-4">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
                <div className="tarjeta-producto animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                  <img src={product.img} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>Categoría: {product.category}</p>
                  <p className="precio-producto">${product.price.toLocaleString()}</p>
                  <button className="btn btn-outline-primary boton-producto" onClick={() => addToCart(product.id)}>
                    Añadir al carrito
                  </button>
                  <Link to={`/product/${product.id}`} className="btn btn-outline-secondary ms-2">
                    Ver Detalle
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Cargando productos...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer;