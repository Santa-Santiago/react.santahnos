import { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < stock) {
    setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
   setQuantity(quantity - 1);
    }
 };

const handleAdd = () => {
    onAdd(quantity);
    setQuantity(1);
};

 return (
    <div className="d-flex align-items-center">
    <div className="input-group w-50">
        <button className="btn btn-outline-secondary" onClick={handleDecrement}>-</button>
        <input
        type="text"
        className="form-control text-center"
          value={quantity}
        readOnly
        />
        <button className="btn btn-outline-secondary" onClick={handleIncrement}>+</button>
    </div>
    <button
        className="btn btn-primary ms-3"
        onClick={handleAdd}
        disabled={stock === 0}
    >
        Añadir al carrito
     </button>
    </div>
  );
};

export default ItemCount;