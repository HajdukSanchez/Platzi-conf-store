import React from 'react';
import '../styles/components/Information.scss';

const Information = () => {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact information</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="Full name" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <input type="text" placeholder="Address" name="address" />
            <input type="text" placeholder="Additional address" name="apto" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="Country" name="country" />
            <input type="text" placeholder="State" name="state" />
            <input type="number" placeholder="Postal code" name="cp" />
            <input type="number" placeholder="Phone number" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Back</div>
          <div className="Information-next">Go to pay</div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Order:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
