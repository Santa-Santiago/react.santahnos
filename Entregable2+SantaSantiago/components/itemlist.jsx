import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const productsData = [
  { id: 1, name: "Bolsa de Cemento", price: 12000, category: "Materiales", img: "./Img/cemento.jpg", stock: 50, description: "Bolsa de cemento de alta calidad para construcción." },
  { id: 2, name: "Ladrillos Rojos", price: 450000, category: "Materiales", img: "./Img/ladrillos.jpg", stock: 100, description: "Ladrillos rojos resistentes para estructuras duraderas." },
  { id: 3, name: "Pintura Blanca", price: 65000, category: "Pinturas", img: "./Img/pintura.jpg", stock: 30, description: "Pintura blanca de larga duración para interiores y exteriores." },
  { id: 4, name: "Varillas de Acero", price: 80000, category: "Materiales", img: "./Img/varillas.jpg", stock: 20, description: "Varillas de acero para refuerzo estructural." },
  { id: 5, name: "Arena de Construcción", price: 15000, category: "Materiales", img: "./Img/arena.jpg", stock: 60, description: "Arena fina para mezclas de construcción." },
  { id: 6, name: "Cemento Prefabricado", price: 55000, category: "Materiales", img: "./Img/cemento_prefab.jpg", stock: 40, description: "Cemento prefabricado para proyectos rápidos." },
  { id: 7, name: "Escalera De Aluminio", price: 149000, category: "Herramientas", img: "./Img/escalera.jpg", stock: 15, description: "Escalera ligera y resistente de aluminio." },
  { id: 8, name: "Taladro Diamante", price: 55000, category: "Herramientas", img: "./Img/taladro.jpg", stock: 25, description: "Taladro de alta potencia con punta de diamante." }
];

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const foundProduct = productsData.find(p => p.id === parseInt(productId));
          resolve(foundProduct || null);
        }, 1000);
      });
    };

    fetchProduct().then(data => setProduct(data));
  }, [productId]);

  const handleAddToCart = (quantity) => {
    if (product) {
      addToCart(product.id, quantity);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {product ? (
            <div className="card animate__animated animate__fadeIn">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.img} className="img-fluid rounded-start" alt={product.name} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p className="card-text">Categoría: {product.category}</p>
                    <p className="card-text">Precio: ${product.price.toLocaleString()}</p>
                    <p className="card-text">Stock: {product.stock}</p>
                    <p className="card-text">{product.description}</p>
                    <ItemCount stock={product.stock} onAdd={handleAddToCart} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Cargando producto...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;