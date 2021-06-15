import React from 'react';
import '../styles/components/Checkout.scss';

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Orders list</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>Item Name</h4>
            <span>$10</span>
          </div>
          <button type="button">Delete</button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Total price: $10</h3>
        <button>Continue order</button>
      </div>
    </div>
  );
};

export default Checkout;
