import React from 'react';

const CartWidget = () => {
    return (
    <div className="d-flex align-items-center">
        <span role="img" aria-label="cart" style={{ fontSize: '1.5rem' }}>🛒</span>
        <span className="badge bg-danger ms-1">3</span>
    </div>
    );
};

export default CartWidget;
