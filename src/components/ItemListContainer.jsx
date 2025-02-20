import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
    <div className="container mt-4">
        <h2>{greeting}</h2>
      {/* Aquí podrías renderizar la lista de items en el futuro */}
    </div>
    );
};

export default ItemListContainer;
