import React from 'react';

const CartWidget = () => {
    return (
    <div className="d-flex align-items-center">
      {/* Ícono del carrito */}
        <span role="img" aria-label="cart" style={{ fontSize: '1.5rem' }}>🛒</span>
      {/* Notificación con número fijo */}
        <span className="badge bg-danger ms-1">3</span>
    </div>
    );
};

export default CartWidget;
