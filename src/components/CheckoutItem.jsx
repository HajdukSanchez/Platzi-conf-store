import React from 'react';

const CheckoutItem = ({ item, handleRemoveFromCart }) => {
  return (
    <div className="Checkout-item">
      <div className="Checkout-element">
        <h4>{item.title}</h4>
        <span>$ {item.price}</span>
      </div>
      <button type="button" onClick={() => handleRemoveFromCart(item)}>
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  );
};

export default CheckoutItem;
