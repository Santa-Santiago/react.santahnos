const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img
        src="./Img/carrito.png"
        alt="Carrito de compras"
        style={{ width: '24px', height: '24px', cursor: 'pointer' }}
        className="me-2"
      />
      <span className="badge bg-danger ms-1">0</span>
    </div>
  );
};

export default CartWidget;