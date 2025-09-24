const CartWidget = () => {
return (
    <div className="cart-widget">
      { <img 
        src="../Img/carrito.png"  
        alt="Carrito de compras" 
        style={{ width: '30px', height: '30px', cursor: 'pointer' }}  
        className="me-2"  
      />}
    <i className="bi bi-cart3" style={{ fontSize: '24px', cursor: 'pointer' }}></i>
      <span className="badge bg-danger ms-1">0</span> {/* Contador*/}
    </div>
);
};

export default CartWidget;