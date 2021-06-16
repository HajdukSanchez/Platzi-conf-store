import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import { handleSumTotal } from '../utils';
import '../styles/components/Payment.scss';

import AppContext from '../context/AppContext';

const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);

  // Those are necessary data for paypalButton
  const paypalOptions = {
    clientId: String(process.env.PAYPAL_API_KEY),
    intent: 'capture',
    currency: 'USD',
  };
  // Those are necessary data for paypalButton
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  // This is a function in charge of handle the paymentSuccess
  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      useHistory.push('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Order resume:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.id}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          {/* The props are necessary for the API of paypalButton */}
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
