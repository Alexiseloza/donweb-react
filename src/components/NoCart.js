import React from 'react';

const NoCart = () => {
  return (
    <div className="emptyCartContainer">
      <div className="emptyCart">
        <div className="emptyCart3">
          <i class="fas fa-shopping-cart fa-10x"></i>
          <h2 className="emptyText">El carrito está vacío</h2>
        </div>
      </div>
    </div>
  );
};

export default NoCart;
