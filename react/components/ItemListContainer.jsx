const ItemListContainer = ({ greeting }) => {
return (
    <div className="container mt-4">
    <div className="row justify-content-center">
        <div className="col-md-8 text-center">
        <h2>{greeting}</h2>
          {/* Aquí se renderizará la lista de items en futuras iteraciones */}
        <p>Próximamente: Lista de productos con campos {`{ id, title, category, price, img, stock }`}.</p>
        </div>
    </div>
    </div>
    );
};

export default ItemListContainer;