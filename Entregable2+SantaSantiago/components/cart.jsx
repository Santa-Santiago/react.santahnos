import { useEffect } from 'react';

const Cart = () => {
  useEffect(() => {
    updateCartMenu(); // Actualiza el carrito al cargar la página
  }, []);

  return (
    <div className="contenido-principal">
      <div className="productos-carrito">
        <h2>Carrito de compras</h2>
        <div className="select-all">
          <span>Todos los productos</span>
        </div>
        <div id="cartItems"></div>
        <div className="abordaje">
          <span>Envío: Gratis</span>
        </div>
      </div>
      <div className="sidebar">
        <h2>Resumen de compra</h2>
        <div id="cartSummary"></div>
        <button className="checkout-btn" onClick={checkCart}>Continuar compra</button>
      </div>
    </div>
  );
};

export default Cart;