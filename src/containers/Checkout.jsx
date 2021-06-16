import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.scss';

import AppContext from '../context/AppContext';

import CheckoutItem from '../components/CheckoutItem';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemoveFromCart = (cart) => {
    removeFromCart(cart);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? 'Order List' : 'No items selected yet'}</h3>
        {cart.map((item) => (
          <CheckoutItem
            item={item}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <div className="Checkout-sidebar">
        <h3>{`Total price: $ ${cart.length > 0 ? handleSumTotal() : ''}`}</h3>
        <Link to="/checkout/information">
          <button type="button" disabled={cart.length <= 0}>
            Continue order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
