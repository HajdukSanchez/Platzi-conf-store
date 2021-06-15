import React from 'react';
import '../styles/components/Payment.scss';

const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Order resume:</h3>
        <div className="Payment-button">Pay with PayPal</div>
      </div>
    </div>
  );
};

export default Payment;
